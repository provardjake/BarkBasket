import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { QUERY_PRODUCTS } from '../utils/queries';
import Auth from "../utils/auth";
import { ADD_TO_CART } from "../utils/mutations";
import { useMutation } from '@apollo/client';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  const addToCart = (product) =>{
    
  }

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
          products &&
            products.map((product) => (
              <Card style={{ width: '18rem' }} key= {product._id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.price}
                </Card.Text>
                {Auth.loggedIn() ? (
                  <>
                    <Button variant="primary" onClick={addToCart(product)}>Add To Cart</Button>
                  </>
                ):(
                  <>
                    <Button variant="primary" onClick={addToCart(product)} style={{display: "none"}}>Add To Cart</Button>
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
