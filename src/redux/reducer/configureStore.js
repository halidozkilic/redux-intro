import {applyMiddleware, createStore} from "redux"
import rootReducer from "./index"
import thunk from "redux-thunk"
//create store in redux with combined(rootReducer) reducers
export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}