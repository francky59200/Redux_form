import * as formActions from "../actions/form.const";

const initState = [];

const todosReducers = (state = initState, action) => {
  switch (action.type) {
    case formActions.ADD_ITEM:
      console.log("ceci est une action", action);
      return [...state, action.item];
    case formActions.EDIT_ITEM:
      let newState = [...state];
      newState.splice(action.key, 1, action.item);
      return newState;
    case formActions.DELETE_ITEM:
      let newState2 = [...state];
      newState2.splice(action.key, 1);
      return newState2;
    default:
      return state;
  }
};

export default todosReducers;
