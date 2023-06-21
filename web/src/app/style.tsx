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

  @media (min-width: 776px) {
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 12%;
  }
`