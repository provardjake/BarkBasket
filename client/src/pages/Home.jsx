import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QUERY_PRODUCTS } from '../utils/queries';
import './Home.css'; // Import the Home.css file

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (productId) => {
    setAddedToCart({ ...addedToCart, [productId]: true });
    // You can add further functionality related to adding to the cart here
  };

  return (
    <main className="main-container">
      <div className="flex-row justify-center">
        {/* Other content */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            products &&
            products.map((product) => (
              <Card className="product-card" key={product._id}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product._id)}
                    disabled={addedToCart[product._id]}
                  >
                    {addedToCart[product._id] ? 'Added to Cart' : 'Add To Cart'}
                  </Button>
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
