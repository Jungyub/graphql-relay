import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { SearchPageQuery } from './__generated__/SearchPageQuery.graphql';

const { Suspense } = React;

const SearchQuery = graphql`
  query SearchPageQuery($query: String!, $count: Int!, $cursor: String) {
    ...SearchPageFragment @arguments(count: $count, cursor: $cursor)
  }
`;

export function SearchPage() {
  const query = useLazyLoadQuery<SearchPageQuery>(SearchQuery, { query: '', count: 10 });

  return (
    <Container>
      <Suspense fallback={'Loading...'}>
        <Search query={query} />
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
`;
