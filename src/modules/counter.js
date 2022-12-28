import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// }

export default counter;
