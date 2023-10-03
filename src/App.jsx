import React, { useState, useEffect } from 'react';
// import UnderConstruction from './UnderConstruction'
// import { Conteiner } from './components/Conteiner'
import Product from './components/product';
import productsData from './data/products.json';

export const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Aca podriamos cargar los productos desde una API o base de datos
    // En este caso, cargaríamos los productos desde un archivo JSON local 
    // como ejemplo
    import('./data/products.json')
      .then((data) => {
        setProducts(data.default);
      })
      .catch((error) => {
        console.error("No se pudieron cargar los productos", error);
      });
  }, []); // El array vacío significa que este useEffect se ejecuta solo una vez después del primer renderizado
  
  return (
    <div className="app">
      <h1>Lista de Productos</h1>
      <div className="product-list d-flex flex-wrap justify-content-around">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// export const App = () => {
//   return (
//     <>
//         {/* <UnderConstruction/> */}
//         <Conteiner/>
//     </>
//   )
// }
