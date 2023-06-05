'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PlayCircle, ChevronRight } from 'lucide-react';

interface Slide {
  backgroundImage: string
}

export default function Carousel({ slides } : { slides: any[]}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction:any) => {
    if (direction === 'prev') {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Container>
      <div className="slides">
        {slides.map((slide:any, index:number) => (
          <Slide
            backgroundImage={slide.backgroundImage}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <Content>
              <h2>#{index + 1} Spotlight</h2>
              <h1>{slide.contentTitle}</h1>
              <div className="moreInfo">
                <p>{slide.releaseDate}</p>
              </div>
              <div className="description">
                <h3>{slide.description}</h3>
              </div>
              <div className="buttons">
                <button className='watch'>
                  <PlayCircle />
                  Watch Now
                </button>
                <button className='details'>
                  Detail
                  <ChevronRight width={16} />
                </button>
              </div>
            </Content>
          </Slide>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 48vh;
  background-color: red;

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  position: absolute;
  bottom: 0;

  h1 {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h2 {
    color: #d8f769;
    font-size: 11px;
    margin-bottom: 8px;
  }

  .description {
    margin-bottom: 8px;

    h3 {
      position: relative;
      width: 92%;
      height: 25px;
      color: #b0aeb0;
      font-size: 12px;
      font-weight: 400;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
    }

    h3:after {
      content:'...';
      background:inherit;
      position:absolute;
      bottom: 0;
      right: -2px;
    }
  }

  .moreInfo {
    display: none;
   }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 220px;
  }
  
  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 25px;
    height: 32px;

    font-size: 12px;
  }

  .watch {
    width: 116px;

    background-color: crimson;
    color: #fff;
  }

  .details {
    width: 72px;
    background-color: #4A4B51;
    color: #fff;
  }
`

const Slide = styled.div<Slide>`
  width: 100%;
  height: 48vh;
  padding: 12px;
  background: linear-gradient(0deg,#202125 0,rgba(32,33,37,0) 82%), url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
`