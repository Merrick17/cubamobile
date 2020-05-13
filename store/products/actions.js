export const getProducts = data => {
  return {
    type: 'GET_PRODUCTS_BY_CATEG',
    data: data,
  };
};

export const findProducts = data => {
  return {
    type: 'FIND_PRODUCTS_BY_NAME',
    data: data,
  };
};

export const fetchProductsByCateg = categ => {
  return async dispatch => {
    try {
      let response = await fetch(
        'http://193.70.91.246:8000/product/prods/find/' + categ,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      //onsole.log('Response', Response);
      let responseJson = await response.json();
      //console.log(responseJson);
      dispatch(getProducts(responseJson));
    } catch (ex) {
      console.log(ex);
    }
  };
};
