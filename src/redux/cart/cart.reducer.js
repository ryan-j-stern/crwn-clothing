import { CartActionTypes } from "./cart.types";
import { addItem, removeItem, clearItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
