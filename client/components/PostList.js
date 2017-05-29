import { gql, graphql } from 'react-apollo';

const POSTS_PER_PAGE = 10;

function PostList({ data: { allPosts, loading, _allPostsMeta }, loadMorePosts }) {
    if (allPosts && allPosts.length) {
        const areMorePosts = allPosts.length < _allPostsMeta.count;
        return (
      <div>
        <ul>
          {allPosts.map((post, index) =>
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.url}>{post.title}</a>
            </div>
          </li>
          )}
      </ul>
        {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
      </div>
        );
    }
    return <div>Loading...</div>;
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    },
    _allPostsMeta {
      count
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
    options: {
        variables: {
            skip: 0,
            first: POSTS_PER_PAGE
        }
    },
    props: ({ data }) => ({
        data,
        loadMorePosts: () => data.fetchMore({
            variables: {
                skip: data.allPosts.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResult;
                }
                return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
                    allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
                });
            }
        })
    })
})(PostList);
