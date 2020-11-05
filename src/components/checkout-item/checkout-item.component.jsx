import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  clearFromCart,
  removeFromCart
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item,
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItemFromCart(item)}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addItemToCart(item)}>
        &#10095;
      </div>
    </span>
    <span className="price">${item.price}</span>
    <div className="remove-button" onClick={() => clearItemFromCart(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addToCart(item)),
  clearItemFromCart: item => dispatch(clearFromCart(item)),
  removeItemFromCart: item => dispatch(removeFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
