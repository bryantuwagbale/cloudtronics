import React from 'react';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/dist/actions";
import { idbPromise } from "../../utils/helpers";
import { useDispatch } from 'react-redux';
import { CartImg, CartInput, ItemWrapper } from './styles';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <ItemWrapper>
      <div>
        <h6>{item.name}</h6>
        <CartImg
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div><h6>${item.price}</h6></div>
        <div>
          <CartInput>
          <h6>Qty:</h6>
          <input
           type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          /></CartInput>
          <button
            onClick={() => removeFromCart(item)}
          >Remove</button>
        </div>
      </div>
    </ItemWrapper>
  );
}

export default CartItem;