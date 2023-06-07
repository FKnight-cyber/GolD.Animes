'use client'

import styled from "styled-components"
import React, { useRef, useState, useEffect } from "react";
import { api } from '@/lib/api';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
              </Slide>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 89px !important;
    height: 133px;
    flex-shrink: 0;
  }
`

const Slide = styled.div<Slide>`
  width: 89px;
  height: 133px;
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
`