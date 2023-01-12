import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { counterReducer } from "./counterReducer";
import { taskReducer } from "./taskReducer";
import { fetchReducer } from "./fetchReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
  task: taskReducer,
  fetch:fetchReducer
});
export default rootReducer;
