import {combineReducers} from 'redux';
import {authReducer} from '../store/auth/index';
import {newproductsReducer} from '../store/newproducts/index';
import {categoriesReducer} from '../store/categories/index';
import {productsReducer} from '../store/products/index';
import {RoutingReducer} from '../store/productRoute/index';
import {SelectedCateg} from '../store/selectedCategory/index';
import {CustomModal} from '../store/customModal/index';
import {spinnerReducer} from '../store/spinner/index';
export default combineReducers({
  authReducer,
  newproductsReducer,
  categoriesReducer,
  productsReducer,
  RoutingReducer,
  SelectedCateg,
  CustomModal,
  spinnerReducer,
});
