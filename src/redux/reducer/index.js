//redux store !

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";

//combining all reducers
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
});

export default rootReducer;
