import {
  ADD_ITEM_IN_CART_BEFOR_LOGIN,
  ADD_ITEM_IN_WISHLIST_BEFOR_LOGIN,
  REMOVE_FROM_CART,
} from "../constants/actions";

export const addItemInCartBeforLogin = (data: any) => {
  return {
    type: ADD_ITEM_IN_CART_BEFOR_LOGIN,
    value: data,
  };
};

export const addItemInWishListBeforLogin = (data: any) => {
  return {
    type: ADD_ITEM_IN_WISHLIST_BEFOR_LOGIN,
    value: data,
  };
};

export const removeItemFromCart = (index: number) => {
  return {
    type: REMOVE_FROM_CART,
    value: index,
  };
};
