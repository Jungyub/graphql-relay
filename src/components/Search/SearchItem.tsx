import styled from 'styled-components';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment, useMutation } from 'react-relay/hooks';
import { SearchItemFragment$key } from './__generated__/SearchItemFragment.graphql';
import { SearchItemAddStarMutation } from './__generated__/SearchItemAddStarMutation.graphql';
import { SearchItemRemoveStarMutation } from './__generated__/SearchItemRemoveStarMutation.graphql';

const SearchItem = ({ SearchItemFragmentRef }: { SearchItemFragmentRef: SearchItemFragment$key }) => {
  const data = useFragment<SearchItemFragment$key>(
    graphql`
      fragment SearchItemFragment on Repository {
        id
        name
        description
        stargazerCount
        viewerHasStarred
      }
    `,
    SearchItemFragmentRef,
  );

  const [addStartCommit, isAddStarInFlight] = useMutation<SearchItemAddStarMutation>(graphql`
    mutation SearchItemAddStarMutation($input: AddStarInput!) {
      addStar(input: $input) {
        starrable {
          stargazerCount
        }
      }
    }
  `);

  const [removeStartCommit, isRemoveStarInFlight] = useMutation<SearchItemRemoveStarMutation>(graphql`
    mutation SearchItemRemoveStarMutation($input: RemoveStarInput!) {
      removeStar(input: $input) {
        starrable {
          stargazerCount
        }
      }
    }
  `);

  const clickStarButton = () => {
    if (data.viewerHasStarred) {
      removeStartCommit({
        variables: {
          input: {
            starrableId: data.id,
          },
        },
      });
    } else {
      addStartCommit({
        variables: {
          input: {
            starrableId: data.id,
          },
        },
      });
    }
  };

  return (
    <Container>
      <Title>{data.name}</Title>
      <p>{data.description}</p>
      <Button onClick={() => clickStarButton()} viewerHasStarred={data.viewerHasStarred}>
        <div>⭑{data.stargazerCount}</div>
      </Button>
    </Container>
  );
};

export default SearchItem;

const Container = styled.li`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Button = styled.button<{ viewerHasStarred: boolean }>`
  padding: 3px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.viewerHasStarred ? '#ecf0f1' : 'white')};
`;
