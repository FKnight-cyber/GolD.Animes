'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayCircle, ChevronRight, Timer, Calendar } from 'lucide-react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { api } from '@/lib/api';

SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Slide {
  backgroundImage: string;
  active: boolean;
}

export default function Spotlight() {
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
  },[])


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
          autoplay={{ delay: 2500 , disableOnInteraction:false}}
          onSlideChange={handleSlideChange}
          mousewheel={true}
        >
          {slides.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <Slide
                backgroundImage={slide.coverImage.extraLarge}
                active={activeIndex === index}
              >
                <Content>
                  <h2>#{index + 1} Spotlight</h2>
                  <h1>{slide.title.romaji}</h1>
                  <div className="moreInfo">
                    <div>
                      <PlayCircle className='icon' color='#fff' />
                      <h4>{slide.format}</h4>
                    </div>
                    <div>
                      <Timer className='icon' color='#fff' />
                      <h4>23m</h4>
                    </div>
                    <div className='calendar'>
                      <Calendar className='icon' color='#fff' />
                      <h4>{slide.startDate}</h4>
                    </div>               
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
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  :active{
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

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
  bottom: 24px;

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

  @media (min-width: 776px) {
    width: 50%;
    padding-left: 40px;
    margin-bottom: 40px;

    h1, h2 {
      margin-bottom: 20px;
    }

    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 16px;
    }

    .description {
      margin-bottom: 30px;

      h3 {
        height: 10vh;
        color: #b0aeb0;
        font-size: 14px;
        line-height: 24px;
      }
    }

    .buttons {
      width: 260px;
    }

    button {
      height: 38px;
      font-size: 16px;
    }

    .watch {
      width: 140px;
    }

    .details {
      width: 82px;
    }

    .moreInfo {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      h4 {
        color: #fff;
        font-size: 14px;
      }

      div {
        display: flex;
        align-items: center;
        width: 70px;

        margin-right: 8px;

        .icon {
          margin-right: 4px;
        }
      }

      .calendar {
        width: 120px;
      }

      span {
        padding: 3px 4px;
        background: crimson;
        color: #111;
        border-radius: 5px;
        line-height: 1em;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
`;

const Slide = styled.div<Slide>`
  height: 48vh;
  padding: 12px;
  background: linear-gradient(0deg, #202125 0, rgba(32, 33, 37, 0) 82%),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 776px) {
    height: 62vh;
    background: 
    linear-gradient(180deg, #202125 0, rgba(32, 33, 37, 0) 40%, #202125 100%),
    linear-gradient(90deg, #202125 0, rgba(32, 33, 37, 0) 70%, #202125 100%),
    url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    mix-blend-mode: multiply;
  }
`;