export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding items
      break;
    case "REMOVE_FROM_BASKET":
      break;
    default:
      return state;
  }
}
export default reducer;
