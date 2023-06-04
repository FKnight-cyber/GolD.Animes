'use client'

import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MainButton() {
  return (
    <Container>
      <Link style={{textDecoration:'none', color:'inherit'}} href={'/home'}>
        View Full Site
      </Link>
      <ArrowRight
        className='icon' 
        color='#fff'
      />
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: crimson;

  color: #fff;
  font-weight: 700;
  font-size: 18px;

  position: absolute;
  bottom: -20px;

  :hover {
    cursor: pointer;
  }

  .icon {
    margin-left: 8px;
  }

  @media (min-width: 776px) {
    width: 100%;
    bottom: -50px;
    border-radius: 0 0 30px 30px;
  }
`