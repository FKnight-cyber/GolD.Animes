'use client'

import styled from "styled-components";

import { Menu, Search } from "lucide-react";
import logo from '../assets/logo.png';
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <div className="p1">
        <Menu color="white" />
        <Image alt='' src={logo} width={112} height={34} />
      </div>
      <div className="p2">
        <Search cursor={'pointer'} color="white" />
        <button>Login</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #2a2c31;
  padding: 8px;

  .p1, .p2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .p1 {
    width: 160px;
  }

  .p2 {
    width: 100px;

    button {
      width: 52px;
      height: 30px;

      color: #fff;
      background-color: crimson;
      border: none;
      border-radius: 4px;

      :hover {
        cursor: pointer;
      }
    }
  }
`