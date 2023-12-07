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
        _id: ID
        productId: String
        name: String
        price: Float
        image: String
    }

    type Auth{
        token: ID!
        user: User
    }

    input ProductData {
        productId: String!
        name: String
        price: Float
        image: String
    }

    type Query{
        users: [User]
        me: User
        products: [Product]
        product(productId: ID!): Product
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        addToCart(productData: ProductData!): User
        removeFromCart(_id: ID!): User
        checkout(userId: ID): User
    }
`;

module.exports = typeDefs;