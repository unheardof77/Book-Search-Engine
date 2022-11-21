const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        authors:[{String}]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getSingleUser:User
    }

    type Mutation {
        createUser:Auth
        login:Auth
        saveBook:User
        deleteBook:User
    }
`;

module.exports = typeDefs;