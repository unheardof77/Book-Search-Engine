import { gql } from '@apollo/client';

export const QUERYSINGLEUSER = gql`
    query Query {
        getSingleUser {
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