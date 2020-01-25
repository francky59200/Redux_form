import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

export default function todoStore() {
  return createStore(rootReducers);
}
