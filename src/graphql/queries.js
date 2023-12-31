import {gql} from '@apollo/client';

const GET_BLOGS_INFO = gql `
query{
    posts {
        authour {
          name
          avatar {
            url
          }
        }
        title
        slug
        id
        coverPhoto {
          url
        }
      }
}
`
const GET_AUTHORS_INFO = gql`
  query{
    authors {
      name
      id
      sluge
      avatar {
        url
      }
    }
  }

`
const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($sluge: String!) {
    author(where: {sluge: $sluge}) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        title
        id
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($sluge: String!) {
    post(where: { slug: $sluge }) {
      authour {
        name
        field
        avatar {
          url
        }
      }
      title
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {GET_BLOGS_INFO , GET_AUTHORS_INFO , GET_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS}