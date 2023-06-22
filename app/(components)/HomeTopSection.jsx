'use client';
import React, { useEffect, useState } from 'react';
import './HomeTopSection.css';
import { fetchMainArticle, formatDate } from '@/utils/supabase';

export default function HomeTopSection() {
  const [mainArt, setMainArt] = useState({text: "", author: "", created_at: ""});

  async function updateMainArticle() {
    const mainArticle = await fetchMainArticle();
    setMainArt(mainArticle);
  }

  const postgresDate = mainArt.created_at;
  

  useEffect(() => {
    updateMainArticle();
  }, [])


  return <div className='home-top'>
    <div className='home-top--left'>
      <figure className='home-top--left__figure'></figure>
    </div>
      <div className='home-top--right'>
        <div className='home-top--right__container'>
          <div className='home-top--right__container-row home-top--right__container-row__1'>
            <div className='home-top--right__container-row__1__item'>{formatDate(postgresDate)}</div>
            <div className='home-top--right__container-row__1__item'>ttr</div>
          </div>
          <div className='home-top--right__container-row home-top--right__container-row__2'>{mainArt.title}</div>
          <div className='home-top--right__container-row home-top--right__container-row__3'>{mainArt.text}</div>
          <div className='home-top--right__container-row home-top--right__container-row__4'>
            <div>Views</div>
            <div>Likes</div>
          </div>
        </div>
      </div>
    </div>
}
