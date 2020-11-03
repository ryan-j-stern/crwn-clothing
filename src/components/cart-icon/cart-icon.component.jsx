import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import { toggleCart } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={() => toggleCart()}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
