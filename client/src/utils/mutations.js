import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const ADD_TO_CART = gql`
  mutation Mutation($productId: ID!) {
    addToCart(productId: $productId) {
      cart {
        name
        price
        productId
      }
    }
  }`;

  export const REMOVE_FROM_CART = gql`
    mutation Mutation($productId: ID!) {
    removeFromCart(productId: $productId) {
      cart {
        name
        productId
        price
      }
    }
  }`;