import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { counterReducer } from "./counterReducer";
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
  task: taskReducer,
});
export default rootReducer;
