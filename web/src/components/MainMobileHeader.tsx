'use client'

import styled from 'styled-components';
import { Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import Image from 'next/image';

import logo from '../assets/logo.png'

export default function MainMobileHeader() {
  return (
    <Container>
      <div className='p1'>
        <Menu color='white' />
        <h6>Menu</h6>
      </div>
      <div className='p2'>
        <Image
          className='logo'
          alt=''
          src={logo}
          height={70}
          width={250}
        />
        <SearchBar />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;

  .logo {
    margin: 24px 0;
  }

  .p1 {
    display: flex;
    align-items: center;
    height: 60px; 

    h5 {
      color: white;
    }

    h6 {
      color: white;
      margin-left: 12px;
    }
  }

  .p2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: white;
    }
  }
`