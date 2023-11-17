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
        price: Int
        stock: Int
        description: String
        image: String
    }

    type Cart{
        userId: ID
        products: [Product]!
        total: Int
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query{
        me: User
        products: [Product]
        product(productId: ID!): Product
        cart: Cart
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        
    }
`;

module.exports = typeDefs;