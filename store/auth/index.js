const initUserState = {};

export const authReducer = (state = initUserState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data;
    case 'LOGOUT':
      return action.data;
    default:
      return state;
  }
};
