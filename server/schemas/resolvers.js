const {User, Product} = require("../models");
const { findOne } = require("../models/Product");
const {signToken, AuthenticationError} = require("../utils/auth")

const resolvers = {
    Query: {
        //query the current logged in user
        me: async (parent, args, context) => {
            if(context.user){
                return User.findOne({_id: context.user._id});
            }
            throw AuthenticationError;
        },
        //query all products
        products: async () =>{
            return Product.find();
        },
        //query one product by id
        product: async (parent, {productId}) =>{
            return Product.findOne({_id: productId});
        }
    },

    Mutation: {
        //mutation to add a new user when they log in
        addUser: async (parent, {username, email, password}) =>{
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return {token, user};
        },
        // mutation to log in an existing user
        login: async (parent, {email, password}) =>{
            const user = await User.findOne({email});

            if(!user){
                throw AuthenticationError;
            }

            const correctPassword = await user.isCorrectPassword(password);

            if(!correctPassword){
                throw AuthenticationError;
            }

            const token = signToken(user);

            return {token, user};
        },
        // mutation to add a product to the user's cart
        addToCart: async (parent, {productData}, context) =>{
            if(context.user){
                const updatedUser = User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: {cart: productData}},
                    {
                        new: true,
                    }
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },
        // mutation to remove a product from the cart
        removeFromCart: async (parent, {productId}, context) =>{
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {cart: {productId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },
        // mutation to checkout the users cart
        checkout: async(parent, {userId}, context) =>{
            if(context.user){
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$set: {cart: []}},
                    {new: true}
                );
            }
            throw AuthenticationError;
        }
    }
};

module.exports = resolvers;