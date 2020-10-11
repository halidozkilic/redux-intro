import {createStore} from "redux"
import rootReducer from "./index"

//create store in redux with combined(rootReducer) reducers
export default function configureStore(){
    return createStore(rootReducer)
}