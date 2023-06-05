'use client'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #202125;

  @media (min-width: 776px) {
    box-sizing: content-box;
  }
`