/* eslint-disable react/prop-types */
const ProductList = ({products, title}) =>{
    return(
        <div>
      <h3>{title}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <ul>
                <li>{product.name}</li>
                <li>{product.category}</li>
                <li>{product.description}</li>
                <li>{product.image}</li>
                <li>{product.price}</li>
                <li>{product.stock}</li>
                <li>{product._id}</li>
            </ul>
          </div>
        ))}
    </div>
    )
}

export default ProductList;