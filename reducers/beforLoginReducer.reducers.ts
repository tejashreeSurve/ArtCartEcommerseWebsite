import {
  ADD_ITEM_IN_CART_BEFOR_LOGIN,
  ADD_ITEM_IN_WISHLIST_BEFOR_LOGIN,
  REMOVE_FROM_CART,
} from "../constants/actions";

export const initialState = {
  cartArray: [],
  wishListArray: [],
};

export const beforLoginReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART_BEFOR_LOGIN:
      return { ...state, cartArray: action.value };
    case ADD_ITEM_IN_WISHLIST_BEFOR_LOGIN:
      return { ...state, wishListArray: action.value };
    case REMOVE_FROM_CART: {
      const arr = state.cartArray.slice(0, action.value);
      const arr2 = state.cartArray.slice(action.value + 1);
      return { ...state, cartArray: arr.concat(arr2) };
    }
    default:
      return { ...state };
  }
};
