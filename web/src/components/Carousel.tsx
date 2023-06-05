'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayCircle, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styled from 'styled-components';

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Slide {
  backgroundImage: string;
  active: boolean;
}

export default function Carousel({ slides }: { slides: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
      <SwiperWrapper>
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={handleSlideChange}
          mousewheel={true}
        >
          {slides.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <Slide
                backgroundImage={slide.backgroundImage}
                active={activeIndex === index}
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
                    <button className="watch">
                      <PlayCircle />
                      Watch Now
                    </button>
                    <button className="details">
                      Detail
                      <ChevronRight width={16} />
                    </button>
                  </div>
                </Content>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
  );
}

const SwiperWrapper = styled.div`
  width: 100%;
  height: 48vh;

  .swiper-pagination {
    bottom: 2px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: white;
  }

  .swiper-pagination-bullet-active {
    background: crimson;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  position: absolute;
  bottom: 20px;

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
      overflow: hidden;
      word-break: break-word;
    }

    h3:after {
      content: '...';
      background: inherit;
      position: absolute;
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
    background-color: #4a4b51;
    color: #fff;
  }
`;

const Slide = styled.div<Slide>`
  width: 100%;
  height: 48vh;
  padding: 12px;
  background: linear-gradient(0deg, #202125 0, rgba(32, 33, 37, 0) 82%),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;