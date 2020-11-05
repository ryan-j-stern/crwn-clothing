import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item
});

export const clearFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});
