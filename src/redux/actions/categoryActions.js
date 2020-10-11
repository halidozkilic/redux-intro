import * as actionTypes from "./actionTypes";


//getting category that returns from reducer.
export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}
