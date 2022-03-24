import * as actionTypes from './shopping-types';

const initialState ={
    products: [],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        default:
            return state;
    }
};

export default shopReducer;
