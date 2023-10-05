import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import ProductsPage from './views/ProductsPage';

export const App = () => {
  return (
    <div>
      <NavBar />
      <ProductsPage />
      <Footer />
    </div>
  );
};