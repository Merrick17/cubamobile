const modalInitState = {
  qte: '',
  productName: '',
  unitPrice: '',
  totalPrice: '',
  itemID: '',
  show: false,
};
export const CustomModal = (state = modalInitState, action) => {
  switch (action.type) {
    case 'HIDE_MODAL':
      return {
        qte: action.data.qte,
        productName: action.data.productName,
        unitPrice: action.data.unitPrice,
        totalPrice: action.data.totalPrice,
        itemID: '',
        show: false,
      };
    case 'SHOW_MODAL':
      return {
        qte: 1,
        productName: action.data.productName,
        unitPrice: action.data.unitPrice,
        totalPrice: action.data.totalPrice,
        itemID: action.data.id,
        show: true,
      };
    case 'UPDATE_DATA':
      console.log('My Unit Price', Number(action.data));
      return {
        qte: action.data,
        productName: state.productName,
        unitPrice: state.unitPrice,
        totalPrice: (Number(action.data) * Number(state.unitPrice)).toFixed(3),
        itemID: state.itemID,
        show: true,
      };
    default:
      return state;
  }
};
