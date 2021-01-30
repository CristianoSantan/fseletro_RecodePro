import produce from 'immer';

export default function carrinho(state = [], action) {
  console.log(state)
  switch (action.type) {
    case "ADD_COMPRA":
      return produce(state, draft => {
        const buyIndex = draft.findIndex(buy => buy.id === action.buy.id);

        if (buyIndex >= 0) {
          draft[buyIndex].amount +=1;
        } else {
          draft.push({
            ...action.buy,
            amount:1
          });
        }
      });
    case "REMOVE_BUY":
      return produce(state, draft => {
        const buyIndex = draft.findIndex(buy => buy.id === action.id);

        if (buyIndex >= 0) {
          draft.splice(buyIndex, 1);
        }
      });
    default:
      return state;
  }
}
