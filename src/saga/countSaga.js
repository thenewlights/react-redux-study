import { put, takeEvery } from "redux-saga/effects";
import { ASYNC_INCREMENT, incrementCreator } from "../store/cashReducer";
import cashReducer from "../store/cashReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}
function* decrementWorker() {}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
}
