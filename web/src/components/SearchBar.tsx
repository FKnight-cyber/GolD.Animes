'use client'

import styled from 'styled-components';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [anime, setAnime] = useState('');
  return (
    <Container>
      <div className='p1'>
        <input 
          type="text" 
          value={anime}
          onChange={(e) => setAnime(e.target.value)}
          placeholder='Search anime...'
        />
        <div className="icon">
          <Search color='white' />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;

  .p1 {
    display: flex;
    justify-content: space-around;
    
    input {
      width: 80%;
      height: 50px;

      border-radius: 30px;
      padding-left: 16px;

      font-size: 16px;
      color: #495057;

      border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));

      ::placeholder {
        font-size: 16px;
      }

      :focus {
        outline: none !important;
        border:1px solid red;
        box-shadow: 0 0 10px #719ECE;
      }
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: crimson;

    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 776px) {
    width: 700px;
    position: absolute;
    top: -70px;

    input {
      width: 600px !important;
    }
  }
`