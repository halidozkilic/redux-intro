//redux store !

import {combineReducers, CombineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"

//combining all reducers 
const rootReducer = combineReducers({
    changeCategoryReducer
})

export default rootReducer;