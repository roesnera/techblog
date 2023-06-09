'use server';
import Article from "./Article";
import "./Articles.module.css";

const Articles = () => {
  return <div className='articles-page'>Articles go here</div>
}

export default Articles

// export default async function Articles() {
    // const fetchArticles = async () => {
    //   const fetchedArticles = await fetch("http://localhost:3001/articles", { next: { revalidate: 60 }});
    //   // console.log(fetchedArticles);
    //   const parsedArticles = await fetchedArticles.json();
    //   // console.log(parsedArticles);
    //   return parsedArticles;
    // }

    // const articles = await fetchArticles();


    // const renderArticles = () => {
    //   const renderedArray = articles.map((art, ind) => {
    //     return <Article key={ind} text={art.text} author={art.author} title={art.title} />
    //   });
    //   return renderedArray;
    // }

    // const renderedArticles = await renderArticles();

    // return <div className='articles-page'>{renderedArticles}</div>
// }