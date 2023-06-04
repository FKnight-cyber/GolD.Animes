'use client'

import styled from 'styled-components';
import { Menu } from 'lucide-react';
import Image from 'next/image';

import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import MainButton from '../MainButton';
import MobileMenu from './MobileMenu';

import logo from '../../assets/logo.png';
import bg from '../../assets/zerotwo.jpg';

export default function MainMobileHeader() {
  return (
    <Container>
      <MobileMenu />
      <div className='p2'>
        <Image
          className='logo'
          alt=''
          src={logo}
          height={70}
          width={250}
        />
      </div>
      <div className="p3" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '70%',
    }}>
        <SearchBar />
        <SearchResults />
        <MainButton />
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 86%;

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

  .p3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`