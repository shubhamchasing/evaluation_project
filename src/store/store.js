import { createStore } from "redux";
import { responsesReducer } from "./reducers/reducer";

const store = createStore(responsesReducer);

export default store;

