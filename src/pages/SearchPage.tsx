import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { SearchPageQuery } from './__generated__/SearchPageQuery.graphql';
import Search from '../components/Search';

const SearchQuery = graphql`
  query SearchPageQuery($query: String!, $count: Int!, $cursor: String) {
    ...SearchPageFragment @arguments(count: $count, cursor: $cursor)
  }
`;

export function SearchPage() {
  const query = useLazyLoadQuery<SearchPageQuery>(SearchQuery, { query: '', count: 10 });

  return <Search query={query} />;
}
