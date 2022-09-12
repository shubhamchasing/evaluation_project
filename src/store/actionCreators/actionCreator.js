import { actionTypes } from "../actions/actions";

export const userDetails = (details) => {
  return {
    type: actionTypes.USER_DETAILS,
    payload: details,
  };
};

export const responses = (response) => {
    //console.log("response",response)
  return {
    type: actionTypes.RESPONSE,
    payload: response,
  };
};
