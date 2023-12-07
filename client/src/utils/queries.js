import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      cart {
        _id
        name
        price
        productId
        image
      }
      password
      email
      username
  }
}`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
  products {
    _id
    category
    description
    image
    price
    name
    stock
  }
}`;

export const QUERY_PRODUCT = gql`
query getProduct($productId: ID!) {
  product(productId: $productId) {
    _id
    category
    description
    name
    image
    price
    stock
  }
}`;