import { gql } from '@apollo/client';

export const QUERYSINGLEUSER = gql`
    query Query($token: ID!) {
        getSingleUser(token: $token) {
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