import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import './HomeBottomSection.css';

export default function HomeBottomSection() {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
      const fetchedArticles = await fetch("http://localhost:3001/articles");
      // console.log(fetchedArticles);
      const parsedArticles = await fetchedArticles.json();
      // console.log(parsedArticles);
      setArticles(parsedArticles);
    }

    useEffect(() => {
      fetchArticles();
    }, []);

    const renderArticles = () => {
      const renderedArray = articles.map((art, ind) => {
        return <Article key={ind} text={art.text} author={art.author} />
      });
      return renderedArray;
    }

    const renderedArticles = renderArticles();
  
  return <div>
    {renderedArticles}
  </div>;
}
