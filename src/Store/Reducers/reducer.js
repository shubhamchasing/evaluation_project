import { actionTypes } from "../Actions/actions";

const intialState = {
  data: {},
};

export const responsesReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS:
      return {
        ...state,
        data: { ...action.payload },
      };

    case actionTypes.RESPONSE:
      return {
        ...state,

        data: { ...state.data, ...action.payload },
      };

    default:
      return state;
  }
};

// {
//     ...state,
//     responses: {
//         ...state.responses,
//         [action.payload.Question_2] : [
//             ...state.responses[action.payload.Question_2],
//             action.payload.response
//         ]
//     },
//   }
