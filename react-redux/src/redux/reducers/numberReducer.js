import { ADD_NUMBER, MINUS_NUMBER } from "../action";
const initialState = {
  number: 0,
};
function numberReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
export default numberReducer;
