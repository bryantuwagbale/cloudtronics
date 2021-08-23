import React, { useState } from "react";
import 'materialize-css';
import ProductList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesMenu";

const Home = () => {

  return (
    <div className="container">
      <h1>HOME</h1>
      <CategoriesList/>
      <ProductList/>
    </div>
  );
};

export default Home;
