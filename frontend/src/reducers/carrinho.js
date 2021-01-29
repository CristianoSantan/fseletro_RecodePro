export default function carrinho(state = [], action) {
  console.log(state)
  switch (action.type) {
    case "ADD_COMPRA":
      return [ ...state, action.buy];
    default:
      return state;
  }
}
