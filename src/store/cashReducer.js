const defaultState = {
  cash: 0,
};

export const ADD_CASH = "ADD_CASH";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const REMOVE_CASH = "REMOVE_CASH";

export default function cashReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + 1 };
    case REMOVE_CASH:
      return { ...state, cash: state.cash - 1 };
    default:
      return state;
  }
}

export const incrementCreator = () => ({
  type: ADD_CASH,
});
export const AsyncIncrementCreator = () => ({
  type: ASYNC_INCREMENT,
});
export const decrementCreator = () => ({
  type: REMOVE_CASH,
});
