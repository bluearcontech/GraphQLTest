import * as types from './types';

export const addPizzaAction = (name, basePrice, price) => ({
  type: types.ADD_PIZZA,
  name,
  basePrice,
  price,
});

export const removePizzaAction = index => ({
  type: types.REMOVE_PIZZA,
  index,
});
