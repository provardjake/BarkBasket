import { useQuery } from '@apollo/client';
import ProductList from "../components/ProductList";

import { QUERY_PRODUCTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  console.log(products);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <ThoughtForm /> */}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              thoughts={products}
              title=""
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
