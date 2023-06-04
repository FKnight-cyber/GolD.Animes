'use client'

import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function SearchResults() {
  const [results, setResults] = useState([]);

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
    color: #fff;
  }
`;

const SearchLink = styled.a`
  display: inline-block;
  margin-right: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 22ch;
  color: #aaa;
  text-decoration: none;

  :hover {
    color: crimson;
  }
`;
