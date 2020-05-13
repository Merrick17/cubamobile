import {saveItem} from '../../helpers/storage';
export const loginUser = data => {
  return {
    type: 'LOGIN',
    data: data,
  };
};

export const logoutUser = data => {
  return {
    type: 'LOGOUT',
    data: data,
  };
};

