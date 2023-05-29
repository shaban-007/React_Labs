import React from 'react';
import { ProductData } from './ProductData';
import Increment_Button from './Increment_Button';
import './Prod.css'


const Prod = () => {
    return (
      <div class="row">
        <h2>products</h2>
        {ProductData.map((product) => (
          <div key={product.id}>
            <div class='Cart'>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <Increment_Button></Increment_Button>
            </div>
          </div>
        ))}
      </div>
    );
  };


export default Prod;