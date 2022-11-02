import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import quizReducer from "./quiz/reducer";
const rootReducer = combineReducers({
  user: userReducer,
//   quiz: quizReducer,
});
export default rootReducer;
