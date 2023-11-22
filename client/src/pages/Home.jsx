import { useQuery } from '@apollo/client';

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
            <div>{data}</div>
          )}
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;
