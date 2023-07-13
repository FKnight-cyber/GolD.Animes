'use client'

import styled from "styled-components";
import { ChevronRight } from 'lucide-react';

import { api } from '@/lib/api';
import { useState, useEffect } from "react";

import AnimeCard from "./AnimeCard";

export default function Topics() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const response = api.get('/trending');
    response.then((res) => {
      setSlides(res.data);
    });
    response.catch((Error) => {
      console.log(Error)
    })
  },[]);

  function renderAnimeCards(slides: any) {
    return slides.map((slide:any, index:number) => <AnimeCard info={slide} key={index} />)
  }
  
  return(
    <Container>
      <div className="topicInfo">
        <h1>Latest Episodes</h1>
        <h6>View more <ChevronRight size={14} /></h6>
      </div>
      <div className="animes">
        {slides.length > 0 ? renderAnimeCards(slides) : ''}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  background-color: #202125;

  .topicInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 16px;
    
    h1 {
      color: crimson;
      font-weight: 600;
      font-size: 20px;
    }

    h6 {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaa;
      font-size: 14px;
      font-weight: 400;

      cursor: pointer;
    }
  }

  .animes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 776px) {
    width: 97%;
    padding: 0 20px;

    .topicInfo {
      padding-left: 0;
      padding-right: 12px;
    }
    .animes {
      justify-content: flex-start;
    }
  }
`