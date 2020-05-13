const initialtProductState = [];

export const productsReducer = (state = initialtProductState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_BY_CATEG':
      return action.data;
    case 'FIND_PRODUCTS_BY_NAME':
      return action.data;
    default:
      return state;
  }
};
