import React from 'react';
import './styles.css';

const Product = ({ product }) => {
  return (
    <div className="card product-card" style={{ width: '18rem', margin: '10px' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <a href="#" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default Product;
