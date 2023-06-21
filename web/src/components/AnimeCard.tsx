'use client'

import styled from "styled-components"

import Image from "next/image"

export default function AnimeCard({info} : {info: any}) {
  return(
    <Container>
     <div style={{width: '100%' , height: '240px', position: 'relative'}}>
      <Image
        alt='Mountains'
        src={info.coverImage.extraLarge}
        layout='fill'
        objectFit='cover'
      />
    </div>
      <div className="info">
        <h2>{info.title.romaji}</h2>
        <h3>{info.format} * 23m</h3>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 49%;
  height: 324px;
  margin-bottom: 8px;
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
  }
`