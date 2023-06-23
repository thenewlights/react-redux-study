import { createStore, combineReducers, applyMiddleware } from "redux";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../saga/countSaga";
import cashReducer from "./cashReducer";
import { rootWatcher } from "../saga/index";
import userReducer from "./userReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cashReducer,
  customerReducer,
  userReducer,
});
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
