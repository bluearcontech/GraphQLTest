import * as types from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PIZZA:
            return [...state, { name: action.name, basePrice: action.basePrice, price: action.price }];
        case types.REMOVE_PIZZA:
            const pizzas = state.filter((item, i) => action.index !== i);
            return pizzas;
        default:
            return state;
    }
};