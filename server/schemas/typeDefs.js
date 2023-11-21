const typeDefs = `
    type User{
        _id: ID
        username: String
        email: String
        password: String
        cart: [Cart]!
    }

    type Product{
        _id: ID
        name: String
        category: String
        price: Float
        stock: Int
        description: String
        image: String
    }

    type Cart{
        productId: ID
        name: String
        price: Float
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query{
        me: User
        products: [Product]
        product(productId: ID!): Product
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        addToCart(productId: ID!): User
        removeFromCart(productId: ID!): User
        checkout(userId: ID!): User
    }
`;

module.exports = typeDefs;