import { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay/hooks';
import { SearchPageFragment$key } from './__generated__/SearchPageFragment.graphql';
import { SearchPageQuery } from '../../pages/__generated__/SearchPageQuery.graphql';
import SearchItem from './SearchItem';

const SearchFragment = graphql`
  fragment SearchPageFragment on Query
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "SearchPagePaginationQuery") {
    search(query: $query, type: REPOSITORY, first: $count, after: $cursor)
      @connection(key: "SearchPage_fragment_search") {
      edges {
        node {
          ...SearchItemFragment
        }
        cursor
      }
    }
  }
`;

function Search(props: { query: SearchPageFragment$key }) {
  const [searchValue, setSearchValue] = useState('');

  const { data, loadNext, hasNext, refetch } = usePaginationFragment<SearchPageQuery, SearchPageFragment$key>(
    SearchFragment,
    props.query,
  );

  const changeSearchValue = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };

  const clickSearchButton = () => {
    refetch({ query: searchValue, count: 10 });
  };
  return (
    <>
      <div>
        <input onChange={changeSearchValue} />
        <Button onClick={clickSearchButton}>검색</Button>
      </div>
      <ul>
        {data?.search?.edges?.map(
          (node, idx) => node?.node && <SearchItem key={idx} SearchItemFragmentRef={node.node} />,
        )}
      </ul>
      <div>{hasNext && <Button onClick={() => loadNext(10)}>더보기</Button>}</div>
    </>
  );
}

export default Search;

const Button = styled.button`
  border: 1px solid #95a5a6;
  background-color: #ecf0f1;
`;
