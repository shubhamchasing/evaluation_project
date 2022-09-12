import { createStore } from "redux";
import { responsesReducer } from "./Reducers/reducer";

const store = createStore(responsesReducer);

export default store;

