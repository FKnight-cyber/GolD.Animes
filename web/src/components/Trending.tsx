'use client'

import styled from "styled-components"
import React, { useState, useEffect } from "react";
import { api } from '@/lib/api';
import { Play } from 'lucide-react';
import { IoStar } from "react-icons/io5";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ShareBar from "./ShareBar";
import AnimeCardInfo from "./AnimeCardInfo";

import zerotwo from "../assets/chibizero2.jpg"

interface Slide {
  backgroundImage: string;
}


export default function Trending() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  return(
    <Container>
       <Swiper
        watchSlidesProgress={true} 
        slidesPerView={5} 
        className="mySwiper"
        loop={true}
       >
        {
          slides.map((slide:any, index:number) => (
            <SwiperSlide key={index}>
              <Slide
                backgroundImage={slide.coverImage.extraLarge}
              >
                <div className="numeration">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="identification">
                  <h1>{slide.title.romaji}</h1>
                  <h2>{String(index + 1).padStart(2, '0')}</h2>
                </div>
                <div className="hide">
                  <AnimeCardInfo info={slide} />
                </div>
              </Slide>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <ShareBar isMain={false} element={
        <div className="image">
          <Image width={80} height={80} alt="" src={zerotwo} />
        </div>
      }/>
    </Container>
  )
}

const Container = styled.div`
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  background-color: #121315;

  :active{
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 89px !important;
    height: 133px;
    flex-shrink: 0;
  }

  @media (min-width: 776px) {
    .swiper-slide{
      width: 18% !important;
      height: 36vh;
    }
  }
`

const Slide = styled.div<Slide>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  margin-right: 2px;
  
  .numeration {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 30px;

    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;

    font-size: 18px;
    font-weight: bolder;
  }

  .identification, .hide {
    display: none;
  }

  @media (min-width: 776px) {
    margin-right: 70px;
    cursor: pointer;
    .numeration {
      display: none;
    }

    .identification {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      width: 40px;
      height: 100%;
      background-color: #4a4b51;
      background: linear-gradient(180deg,#4a4b51 0,rgba(74,75,81,0) 99%);

      position: absolute;
      left: -40px;

      h1 {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        color: #fff;
        margin-bottom: 12px;
        white-space: nowrap;
        height: 30vh;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h2 {
        color: crimson;
        margin-bottom: 6px;
        font-size: 18px;
        font-weight: bolder;
      }
    }

    &:hover .hide {
      display: flex;
    }
  }
`