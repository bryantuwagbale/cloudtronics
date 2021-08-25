import 'materialize-css';
import React from "react";
import ProductList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesMenu";
import Cart from "../components/Cart";
const Home = () => {

  return (
    <div class="hero" role="img" aria-label="">
    <div className="container">
      <CategoriesList/>
      <ProductList/>
      <Cart/>
    </div>
    </div>
  );
};

export default Home;
