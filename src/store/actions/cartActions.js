import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SELECTED_IMG,
  SWITCH_CART,
  SORT_ASC_TO_DESC,
  SORT_DESC_TO_ASC,
} from './actionsType';

export const sortAsc = () => ({
  type: SORT_DESC_TO_ASC,
});

export const sortDesc = () => ({
  type: SORT_ASC_TO_DESC,
});

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
