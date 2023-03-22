import { ADD_NUM, REMOVE_NUM } from "../action";
const initialState = {
  num: 0,
};
function numReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUM:
      return {
        num: state.num + 1,
      };
    case REMOVE_NUM:
      return {
        num: state.num - 1,
      };
    default:
      return state;
  }
}
export default numReducer;
