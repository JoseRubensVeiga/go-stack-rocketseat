import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@Cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const {id} = action.product;

        const productIndex = draft.findIndex((p) => p.id === id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@Cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft) => {
        const {id, amount} = action;

        const productIndex = draft.findIndex((p) => p.id === id);

        if (productIndex >= 0 && amount >= 1) {
          draft[productIndex].amount = amount;
        }
      });
    case '@Cart/REMOVE':
      return produce(state, (draft) => {
        const {id} = action;

        const productIndex = draft.findIndex((p) => p.id === id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
