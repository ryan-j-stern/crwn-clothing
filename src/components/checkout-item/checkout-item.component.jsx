import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, addItemToCart }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div onClick={() => addItemToCart(item)}>&#10094;</div>
      {item.quantity}
      <div onClick={() => addItemToCart(item)}>&#10095;</div>
    </span>
    <span className="price">${item.price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
