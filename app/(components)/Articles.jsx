// "use server";
import Article from "./Article";
import "./Articles.css";
import { fetchAllArticles } from "@/utils/supabase";

export const revalidate = 60;

export default async function Articles() {


  const articles = await fetchAllArticles();

  // const articles = await fetchArticles();

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
