import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://ljfwsogkiqpmhirpcmgo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZndzb2draXFwbWhpcnBjbWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1NTM5MDIsImV4cCI6MjAwMTEyOTkwMn0.CbY8JmzmbWg7DCU86aJuc2aIyKKFJgtwLrqx_we7n9M"
  );

  // fetches all articles from db
  export async function snagPosts() {
    const { data, error } = await supabase.from("post").select("*");
    // .eq("post_id", 1);

    !error ? null : console.log(error);

    return data;

    // textField.innerText = data[0].text;
  }

  // picks one article, currently picking based on id number
  export async function fetchMainArt(){
    const articlesList = await snagPosts();
    // console.log(articlesList);
    let highId = 0;
    const articleToFeature = articlesList.reduce((accumulatorArticle, currentArticle) => {if(currentArticle.post_id >= highId) {highId = currentArticle.post_id; return currentArticle}})
    // console.log(articleToFeature);
    return articleToFeature;
  }

  // formats the dates from postgresql to a human readable format
  export function formatDate(postgresDate) {
    const months = {
        "01": 'January',
        "02": 'February',
        "03": 'March',
        "04": 'April',
        "05": 'May',
        "06": 'June',
        "07": 'July',
        "08": 'August',
        "09": 'September',
        "10": 'October',
        "11": 'November',
        "12": 'December'
    }
    const year = postgresDate.slice(0,4);
    const month = postgresDate.slice(5,7);
    let day = postgresDate.slice(8,10);
    const timeStart = postgresDate.indexOf("T")+1;
    if(day.charAt(0)==="0"){
        day = day.slice(1);
    }
    const date = `${months[month]} ${day}, ${year}`;
    return date;
  }

  export async function getArticlesByAuthor(author) {
    const articles = await snagPosts();
    const articlesByAuthor = [];
    for(const article of articles){
        if(article.author === author){
            articlesByAuthor.push(article);
        }
    }
    return articlesByAuthor;
  }










  /* 
    TESTING FUNCTIONS
  */
  
  async function testingDateFormat() {
    const post = await fetchMainArt();
    const postgresDate = post.created_at;
    console.log(postgresDate);
    const date = formatDate(postgresDate);
    console.log(date);
  }
//   testingDateFormat();