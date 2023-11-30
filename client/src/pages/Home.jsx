import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QUERY_PRODUCTS } from '../utils/queries';
import Auth from "../utils/auth";
import { ADD_TO_CART } from "../utils/mutations";
import { useMutation } from '@apollo/client';
import './Home.css'; // Import the Home.css file

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  const [addedToCart, setAddedToCart] = useState({});

  const [addToCart, {error}] = useMutation(ADD_TO_CART);

  const handleAddToCart = async (product) =>{
    console.log(product);

    const token = Auth.loggedIn() ? Auth.getToken : null;

    if(!token){
      return false;
    }
    console.log(product._id);

    try{
      const response = await addToCart({
        variables: {
          productData: {
            productId: product._id,
            name: product.name,
            price: product.price,
            image: product.image
          }
        }
      });

    }
    catch(err){
      console.error(err);
    }
  }

  return (
    <main className="main-container">
      <h2>Shop Products</h2>
      <div className="">
        {/* Other content */}
        <div className="card-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            products &&
            products.map((product) => (
            <Card className="product-card" key= {product._id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button variant="primary" onClick={() =>handleAddToCart(product)}>Add To Cart</Button>
                  </>
                ):(
                  <>
                    <Button variant="primary" onClick={() =>handleAddToCart(product)} style={{display: "none"}}>Add To Cart</Button>
                  </>
                )
                }
              </Card.Body>
            </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;