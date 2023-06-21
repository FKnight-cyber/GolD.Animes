'use client'

import { Play } from "lucide-react"
import { IoStar } from "react-icons/io5"
import styled from "styled-components"

export default function AnimeCardInfo({ info } : { info: any }) {
  return (
    <Container>
      <h1>{info.title.romaji}</h1>
      <div className="moreInfo">
        <IoStar width={20} color="yellow" />
        <h2>7.43</h2>
      </div>
      <h2 className="description">{info.description}</h2>
      <h2>Japanese: <span>Watashi</span></h2>
      <h2>Synonyms: <span>Demon Slayer, Kimetsu no Yaiba</span></h2>
      <h2>Aired: <span>Apr 9, 2023</span></h2>
      <h2>Status: <span>Currently Airing</span></h2>
      <h2 className="genres">Genres: <span> Action, Adventure, Demons, Historical, Shounen, Super Power</span></h2>
      <div className="buttons">
        <button className="watch">
          <Play />
          Watch Now
        </button>
        <button className="add">
          +
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  flex-direction: column;
  width: 360px;

  padding: 12px;

  background-color: #343a40;
  border-radius: 12px;

  position: absolute;
  left: 50%;
 
  z-index: 3;

  cursor: default;

  h1 {
    color: #fff;
    word-wrap: break-word;
    overflow: hidden;
    height: 34px;
  }

  .moreInfo {
    display: flex;
    align-items: center;
    min-width: 50px;
    width: 14%;
    justify-content: space-around;
    height: 28px;
    margin-bottom: 12px;

    h2 {
      font-size: 14px;
      margin-bottom: 0;
    }
  }

  .description {
    height: 45px;
    margin-bottom: 12px;
  }

  .genres {
    height: 32px;
  }

  h2 {
    display: flex;
    color: #ccc;
    word-wrap: break-word;
    overflow: hidden;
    font-size: 12px;
    margin-bottom: 6px;
    line-height:15px;
  }

  span {
    color: #fff;
    height: 14px;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    margin-top: 20px;

    .watch, .add {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bolder;
      border: none;

      cursor: pointer;
    }

    .watch {
      width: 70%;

      background-color: crimson;
      border-radius: 25px;
      color: #fff;
    }

    .add {
      width: 40px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
`