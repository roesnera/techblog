import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANONYMOUS_KEY
);

// fetches all articles from db
export async function fetchAllArticles() {
  const { data, error } = await supabase.from("post").select("*");

  return data;
}

// picks one article, currently picking based on id number
export async function fetchMainArticle() {
  const articlesList = await fetchAllArticles();
  let highId = 0;
  const articleToFeature = articlesList.reduce(
    (accumulatorArticle, currentArticle) => {
      if (currentArticle.post_id >= highId) {
        highId = currentArticle.post_id;
        return currentArticle;
      }
    }
  );
  return articleToFeature;
}

// formats the dates from postgresql to a human readable format
export function formatDate(postgresDate) {
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const year = postgresDate.slice(0, 4);
  const month = postgresDate.slice(5, 7);
  let day = postgresDate.slice(8, 10);
  if (day.charAt(0) === "0") {
    day = day.slice(1);
  }
  const date = `${months[month]} ${day}, ${year}`;
  return date;
}

export async function getArticlesByAuthor(author) {
  const articles = await fetchAllArticles();
  const articlesByAuthor = [];
  for (const article of articles) {
    if (article.author === author) {
      articlesByAuthor.push(article);
    }
  }
  return articlesByAuthor;
}

// I cannot get fetch data from the post-category or a duplicate table that I made for this purpose
// I even copy pasted the code from supabase and it still isn't returning any data at all
// Supabase returns a 200 status code, so the table is found,
// but we don't get any actual data back from it . . .
// Somehow I had RLS enabled for this table - even without a policy I couldn't get any data
export async function getArticleIdsByTagId(tagId) {
  console.log("getArticleIdsByTagId called")
  let { data } = await supabase
    .from("post-category")
    .select("post_id")
    .eq("category_id", tagId);
  return data;
}
/* 
    FIXME: refactor this to make fewer async requests
  */
export async function getArticlesByTag(tag) {
  const { data: tagId } = await supabase
    .from("category")
    .select("category_id")
    .eq("name", tag);
  if(!!tagId[0]){
    const postIds = await getArticleIdsByTagId(tagId[0].category_id);
    const postIdsArr = [];
    for (const entry of postIds) {
      postIdsArr.push(entry.post_id);
    }
    const { data: posts } = await supabase
      .from("post")
      .select("*")
      .in("post_id", postIdsArr);
    return posts;
  }
  return [];
}

/* 
    TODO: get tags by article function
  */

/* 
    TESTING FUNCTIONS
  */

async function testingDateFormat() {
  const post = await fetchMainArticle();
  const postgresDate = post.created_at;
  console.log(postgresDate);
  const date = formatDate(postgresDate);
  console.log(date);
}
//   testingDateFormat();

async function testingGetArticlesByTagId(id) {
  const articles = await getArticleIdsByTagId(id);
  console.log(articles);
}
// testingGetArticlesByTagId(2);

async function testingGetArticlesByTag(tag) {
  const articles = await getArticlesByTag(tag);
  console.log(articles);
}
// testingGetArticlesByTag("databases");
