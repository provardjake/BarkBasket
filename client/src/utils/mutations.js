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
  mutation addToCart($productId: ID!) {
    addToCart(productId: $productId) {
      cart {
        name
        price
        productId
      }
    }
  }`;

  export const REMOVE_FROM_CART = gql`
    mutation removeFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
      cart {
        name
        productId
        price
      }
    }
  }`;

  export const CHECKOUT = gql`
    mutation checkout($userId: ID!) {
    checkout(userId: $userId) {
      cart {
        name
        price
        productId
      }
    }
  }`;