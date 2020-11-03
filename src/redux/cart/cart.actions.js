import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item
});
