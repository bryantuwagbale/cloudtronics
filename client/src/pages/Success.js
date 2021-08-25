import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map(item => item._id);
      
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
    
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/store');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
   <div class="hero" role="img" aria-label="">
     <div class="hero-inner">
       <div>
        <h1>Success!</h1>
        <h4>
          Thank you for your purchase!
        </h4>
        <h4>
          You will now be redirected to the home page
        </h4>
      </div>
      </div>
    </div>
  );
};

export default Success;
