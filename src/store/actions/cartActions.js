import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SELECTED_IMG, SWITCH_CART } from './actionsType';

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

export const subtractQuantity = id => ({
  type: SUB_QUANTITY,
  id,
});

export const addQuantity = id => ({
  type: ADD_QUANTITY,
  id,
});

export const changeSelectedImg = (id, i) => ({
  type: SELECTED_IMG,
  id,
  i,
});

export const switchCart = isOpen => ({
  type: SWITCH_CART,
  isOpen,
});
