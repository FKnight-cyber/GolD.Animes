'use client'

import styled from 'styled-components';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Menu {
  openMenu: boolean
}

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Container openMenu={openMenu}>
      <div className='p1' onClick={() => setOpenMenu(!openMenu)}>
        <Menu color={openMenu ? 'crimson' : '#fff'} />
        <h6>Menu</h6>
      </div>
      <div className="options">
        <Link className='option' href={'/home'}>
          Home
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.div<Menu>`
 position: relative;

  .p1 {
    width: 80px;
    cursor: pointer;

    h6 {
      color: ${props => props.openMenu ? 'crimson' : '#fff'};
    }
  }

  .options{
    display: ${props => props.openMenu ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    max-height: 276px;
    
    background: rgba(92,93,99,.98);
    border-radius: 25px;

    position: absolute;
    left: 20px;
    z-index: 1;

    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;

      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;

      background-color: transparent;
    }
  }

  @media (min-width: 776px) {
    display: none;
  }
`