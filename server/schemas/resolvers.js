const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, args, context) => {
            if(context.user){
                return await User.findOne({ _id: context.user._id});
            };
            throw new AuthenticationError('You need to be logged in!');
        }
    },

    Mutation: {
        createUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, {username, email, password}) =>{
            const user = await User.findOne({$or:[{username: username}, {email: email}]});
            if(!user){
                throw new AuthenticationError('Incorrect credentials.');
            };
            const correct = await user.isCorrectPassword(password);
            if(!correct){
                throw new AuthenticationError('Incorrect credentials.');
            };
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, args, context) =>{
            if(!context.user){
                throw new AuthenticationError('Must be logged in');
            };
            const updatedUser = await User.findOneAndUpdate({_id: context.user._id}, {$addToSet: {savedBooks: args}}, {new: true, runValidators: true});
            return updatedUser;
        },
        deleteBook: async (parent, {bookId}, context) =>{
            const updatedUser = await User.findOneAndUpdate({_id:context.user._id}, {$pull: {savedBooks: {bookId: bookId}}}, {new: true});
            return updatedUser;
        }
    }
};

module.exports = resolvers;