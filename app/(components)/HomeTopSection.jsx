'use client';
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
    <div className='home-top--left'>
      <figure className='home-top--left__figure'></figure>
    </div>
      <div className='home-top--right'>
        <div className='home-top--right__container'>
          <div className='home-top--right__container-row home-top--right__container-row__1'>
            <div className='home-top--right__container-row__1__item'>Date</div>
            <div className='home-top--right__container-row__1__item'>ttr</div>
          </div>
          <div className='home-top--right__container-row home-top--right__container-row__2'>A Big Title</div>
          <div className='home-top--right__container-row home-top--right__container-row__3'>{mainArt.text}</div>
          <div className='home-top--right__container-row home-top--right__container-row__4'>
            <div>Views</div>
            <div>Likes</div>
          </div>
        </div>
      </div>
    </div>
}
