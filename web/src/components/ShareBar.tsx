'use client'

import styled from "styled-components"

interface page {
  isMain:boolean
}

export default function ShareBar({element, isMain} : {element:any, isMain:boolean}) {
  return(
    <Container isMain={isMain}>
      {element}
      <div className="text">
        <h2>Share GolD.</h2>
        <h6>with your friends</h6>
      </div>
    </Container>
  )
}

const Container = styled.div<page>`
  display: flex;
  align-items: center;
  width: 96%;
  height: 82px;
  margin: ${props => props.isMain ? '50px 20px 10px 0' : '5px 10px 10px 0'};
  padding: 12px;
  cursor: pointer;

  background-color: #121315;

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

  .image {
    display: none;
  }

  @media (min-width: 776px) {
    width: 81%;
    margin-top: ${props => props.isMain ? '90px' : '40px'};

    .image {
      display: flex;
      margin-right: 16px;
    }
  }
`