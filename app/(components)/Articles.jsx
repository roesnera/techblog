"use server";
import Article from "./Article";
import "./Articles.css";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ljfwsogkiqpmhirpcmgo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZndzb2draXFwbWhpcnBjbWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1NTM5MDIsImV4cCI6MjAwMTEyOTkwMn0.CbY8JmzmbWg7DCU86aJuc2aIyKKFJgtwLrqx_we7n9M"
);

export default async function Articles() {
  const fetchArticles = async () => {
    const fetchedArticles = await fetch("http://localhost:3001/articles", {
      next: { revalidate: 60 },
    });
    // console.log(fetchedArticles);
    const parsedArticles = await fetchedArticles.json();
    // console.log(parsedArticles);
    return parsedArticles;
  };
  async function snagPosts() {
    const { data, error } = await supabase.from("post").select("*");
    // .eq("post_id", 1);

    !error ? console.log(data) : console.log(error);

    // textField.innerText = data[0].text;
  }
  snagPosts();

  const articles = await fetchArticles();

  const renderArticles = () => {
    const renderedArray = articles.map((art, ind) => {
      return (
        <Article
          key={ind}
          text={art.text}
          author={art.author}
          title={art.title}
        />
      );
    });
    return renderedArray;
  };

  const renderedArticles = await renderArticles();

  return <div className="articles-page">{renderedArticles}</div>;
}
