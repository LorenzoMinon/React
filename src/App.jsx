import React, { useState, useEffect } from 'react';
// import UnderConstruction from './UnderConstruction'
// import { Conteiner } from './components/Conteiner'
import Product from './components/product/Product';
import productsData from './data/products.json';

export const App = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const result = await productsData
    const data = await result 
    return data
  }

 
  useEffect(() => {
    getData().then((elem) => setProducts(elem))
    // Aca podriamos cargar los productos desde una API o base de datos
    // En este caso, cargaríamos los productos desde un archivo JSON local 
    // como ejemplo
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

{/* <Layout>
<NavBar></NavBar>
<Product></Product>
<Footer></Footer>
</Layout> */}
//Productos
//NavBar
//Footer
