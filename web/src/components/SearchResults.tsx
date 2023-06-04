'use client'

import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function SearchResults() {
  const [results, setResults] = useState(['teste 1', 'teste 2', 'Kimetsu no Yaiba: shingeki village demonstration', 'awdhaiwuhd awudhauhdwiwuahd awudhioauwdhi awudh', 'auwhdiauwhdiua awudhaiouwdhiuawhd auwdhuawhd uawduwadhiawud']);

  return (
    <Container>
      <span>Top search: </span>
      {results.map((result, index) => (
        <React.Fragment key={index}>
          <Link href="/">
            <SearchLink>{result}</SearchLink>
          </Link>
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 12px;

  span {
    color: #000;
    font-size: 20px;
    font-weight: bolder;
  }

  @media (min-width: 776px) {
    width: 700px;
    padding: 20px;
  }
`;

const SearchLink = styled.a`
  display: inline-block;
  margin-right: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 22ch;
  color: #000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  :hover {
    color: crimson;
  }
`;
