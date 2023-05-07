import React, { useEffect, useState } from 'react';
import './HomeTopSection.css';

export default function HomeTopSection() {
  const [mainArt, setMainArt] = useState({text: "", author: ""});

  const fetchMainArt = async () => {
    const response = await fetch("http://localhost:3001/articles");
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    const article = data[0];
    setMainArt(article);
  }

  useEffect(() => {
    fetchMainArt();
  }, [])

  return <div className='home-top'>
    <div className='home-top-left'>
      <figure>top figure placeholder</figure>
    </div>
      <div className='home-top-right'>
        {mainArt.text}
      </div>
    </div>
}
