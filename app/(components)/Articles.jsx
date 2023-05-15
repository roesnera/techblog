'use server';
import Article from "./Article";
import "./Articles.css";

export default async function Articles() {


    const fetchArticles = async () => {
      const fetchedArticles = await fetch("http://localhost:3001/articles");
      // console.log(fetchedArticles);
      const parsedArticles = await fetchedArticles.json();
      // console.log(parsedArticles);
      return parsedArticles;
    }

    const articles = await fetchArticles();


    const renderArticles = () => {
      const renderedArray = articles.map((art, ind) => {
        return <Article key={ind} text={art.text} author={art.author} />
      });
      return renderedArray;
    }

    const renderedArticles = await renderArticles();

    return <div className='articles-page'>{renderedArticles}</div>
}