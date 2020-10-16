//redux store !

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

//combining all reducers
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer
});

export default rootReducer;
