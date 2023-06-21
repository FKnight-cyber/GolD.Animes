'use client'

import styled from "styled-components"
import { PlayCircle } from 'lucide-react'

import Image from "next/image"
import AnimeCardInfo from "./AnimeCardInfo"

export default function AnimeCard({info} : {info: any}) {
  return(
    <Container>
      <div className="imageBox" 
        style={{
          width: '100%' , 
          height: '240px', 
          position: 'relative',
        }}
      >
        <Image
          alt=''
          src={info.coverImage.extraLarge}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <PlayCircle className="icon" size={70} color="#fff" />
      <div className="hide">
        <AnimeCardInfo info={info} />
      </div>
      <div className="info">
        <h2>{info.title.romaji}</h2>
        <h3>{info.format} * 23m</h3>
      </div>
      {
        info.isAdult ? 
          <div className="adult">
            18+
          </div>
        :
        ''
      }
    </Container>
  )
}

const Container = styled.div`
  width: 49%;
  height: 324px;
  margin-bottom: 8px;

  position: relative;

  cursor: pointer;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 84px;
    background-color: #2a2c31;

    padding: 8px;

    h2 {
      color: #fff;
      font-size: 14px;
      height: 43px;
      overflow: hidden;
    }

    h3 {
      color: #aaa;
      font-size: 12px;
    }
  }

  .adult {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 26px;

    background-color: crimson;
    border-radius: 6px;
    color: #fff;

    position: absolute;
    top: 6px;
    left: 6px;
  }

  .hide {
    position: relative;
    display: none;
  }

  @media (min-width: 776px) {
    width: 16%;
    max-width: 200px;
    height: 384px;
    margin-right: 18px;
    margin-bottom: 12px;

    > * {
      &:first-child {
         height: 300px !important;
      }
    }

    .adult {
      top: 12px;
      left: 12px;
    }

    .imageBox {
      transition: opacity 1s;
    }

    .icon {
      display: none;
    }

    &:hover .icon {
      display: flex;
      position: absolute;
      top: 30%;
      left: 30%;
      z-index: 2;
    }

    &:hover .hide {
      display: flex;
      position: absolute;
      left: 50%;
      bottom: 70%;
    }

    &:hover .imageBox {
      opacity: 0.3;
    }
  }
`