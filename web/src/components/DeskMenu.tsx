'use client'

import styled from 'styled-components';
import Link from 'next/link';

export default function DeskMenu() {
  return (
    <Container>
      <Link className='option' href={'/home'}>
        Home
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 600px;
  height: 60px;

  .option {
    text-decoration: none;
    font-weight: 700;
    color: #fff;

    :hover {
      color: crimson;
    }
  }

  @media (max-width: 775px) {
    display: none;
  }
`