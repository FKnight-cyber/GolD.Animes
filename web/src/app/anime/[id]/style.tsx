'use client'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #202125;

  .banner {
    width: 100%;
    height: 32%;
    background-image: url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 760px) {
    .banner {
      width: 100%;
      height: 42%;
      background-size: contain;
    }
  }
`