import React, { useState, useEffect } from 'react';
import { ProductData } from './ProductData';
import Increment_Button from './Increment_Button';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(ProductData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        <Increment_Button></Increment_Button>
        </div>
      ))}
    </div>
  );
};

export default Products;