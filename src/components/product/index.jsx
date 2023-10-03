import React from 'react';

// Lo que queremos hacer aca es crear un componente en React que tome un producto como prop y lo muestre.

// const Product = ({ product }) => {
//   return (
//     <div className="product">
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//     </div>
//   );
// };
const Product = ({ product }) => {
    return (
      <div className="card" style={{ width: '18rem', margin: '10px' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  };
  
  export default Product;



//Pegando desde bootstrap
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

