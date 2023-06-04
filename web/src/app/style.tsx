'use client'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgb(32,33,37);
  padding: 12px;
  margin: 0 auto;

  .share {
    display: flex;
    width: 96%;
    height: 82px;
    margin: 50px 20px 10px 0;
    padding: 12px;

    background-color: #000;

    h2 {
      color: crimson;
      margin-bottom: 6px;
    }

    h6 {
      color: #aaa;
    }

    .bar {
      width: 2px;
      height: 96%;
      background-color: crimson;
      margin-right: 12px;
    }
  }

  @media (min-width: 776px) {
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 12%;

    .share {
      width: 81%;
      margin-top: 90px;
    }
  }
`