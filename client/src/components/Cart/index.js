import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_CHECKOUT } from "../../utils/queries"
import { idbPromise } from "../../utils/helpers"
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import {
  CartDiv,
  CartH2,
  Close,
  CartClosed 
} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });
  }

  if (!state.cartOpen) {
    return (
      <CartClosed onClick={toggleCart}>
        <span
          role="img"
          aria-label="cart">🛒</span>
      </CartClosed>
    );
  }

  return (
    <CartDiv>
      <Close onClick={toggleCart}>X</Close>
      <CartH2>Your Cloudtronics Cart</CartH2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}

          <div>
            <h6>Total: ${calculateTotal()}</h6>

            {
              Auth.loggedIn() ?
                <button onClick={submitCheckout}>
                  Checkout
              </button>
                :
                <span>  Log in to check out!</span>
            }
          </div>
        </div>
      ) : (
          <h3>
          Get some cool gadgets!
          </h3>
        )}
    </CartDiv>
  );
};

export default Cart;
