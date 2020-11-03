import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addToCart }) => (
  <div className="collection-item">
    <div
      style={{ backgroundImage: `url(${item.imageUrl})` }}
      className="image"
    />
    <div className="item-footer">
      <span className="name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
    <CustomButton onClick={() => addToCart(item)} inverted>
      Add To cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
