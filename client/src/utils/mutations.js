import { gql } from '@apollo/client';

export const CREATEUSER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
}
`;

export const DELETEBOOK = gql`
mutation Mutation($bookId: String) {
  deleteBook(bookId: $bookId) {
    _id
    email
    password
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
}
`;

export const SAVEBOOK = gql`
mutation Mutation($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
    _id
    email
    password
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;