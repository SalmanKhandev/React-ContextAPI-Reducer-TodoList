import { CLEAR, REMOVE, RESET } from "./actions";
import { data } from "./data";
const reducer = (state, action) => {
  if (action.type == REMOVE) {
    let man = state.people.filter((salman) => salman.id != action.payload.id);
    return { ...state, people: man };
  }

  if (action.type == RESET) {
    return { ...state, people: data };
  }

  if (action.type == CLEAR) {
    return { ...state, people: [] };
  }
};

export default reducer;
