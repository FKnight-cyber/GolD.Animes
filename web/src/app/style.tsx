'use client'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgb(32,33,37);
  padding: 12px;

  .share {
    width: 90%;
    height: 82px;
    margin: 20px 20px 10px 0;
    padding: 12px;

    background-color: #000;

    h2 {
      color: crimson;
      margin-bottom: 6px;
    }

    h6 {
      color: #aaa;
    }
  }
`