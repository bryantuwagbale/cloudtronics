import React from "react";
import 'materialize-css';
import ProductList from "../components/ProductsList";


const Home = () => {

  return (
    <div className="container">
      <h1>HOME</h1>
      <ProductList/>
    </div>
  );
};

export default Home;
