import { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';
import { graphql } from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay/hooks';
import { SearchPageFragment$key } from './__generated__/SearchPageFragment.graphql';
import { SearchPagePaginationQuery } from './__generated__/SearchPagePaginationQuery.graphql';

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
      }
    }
  }
`;

function Search(props: { query: SearchPageFragment$key }) {
  const [searchValue, setSearchValue] = useState('test');

  const { data, loadNext, hasNext, refetch } = usePaginationFragment<SearchPagePaginationQuery, SearchPageFragment$key>(
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
        <Input value={searchValue} onChange={changeSearchValue} />
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

const Input = styled.input`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ecf0f1;
`;
