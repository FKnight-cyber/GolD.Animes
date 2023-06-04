'use client'

import styled from 'styled-components';
import Image from 'next/image';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import MainButton from './MainButton';
import MobileMenu from './Mobile/MobileMenu';

import logo from '../assets/logo.png';
import bg from '../assets/header3.jpeg';
import Link from 'next/link';

export default function MainMobileHeader() {
  return (
    <Container>
      <MobileMenu />
      <div className='p2'>
        <Link href={'/home'}>
          <Image
            className='logo'
            alt=''
            src={logo}
            height={70}
            width={250}
          />
        </Link>
      </div>
      <div className="p3"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '70%',
        maxWidth:'1500px',
        maxHeight: '500px',
        position: 'relative',
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

    @media (min-width: 524px) and (max-width: 775px) {
      align-items: start;
      margin-left: 28px;
    }
  }

  .p3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 776px) {
    .p2 {
      margin-top: 40px;
      margin-bottom: 60px;
      align-items: start;

      .logo {
        width: 220px;
        height: 60px;
      }
    }

    .p3 {
      align-items: flex-start;
    }
  }
`