import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCart, cartItemsCount }) => (
  <div className="cart-icon" onClick={() => toggleCart()}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{cartItemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
