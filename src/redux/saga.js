import { takeLatest, put, delay, call, all } from "redux-saga/effects";
import { github_url } from "./contants";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./actions";
function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function callApi() {
  return fetch(github_url).then(response => response.json());
}

function* workerSaga() {
  try {
    const response = yield call(callApi);
    console.log(response);

    yield put({ type: API_CALL_SUCCESS, payload: response.items });
  } catch (e) {
    yield put({ type: API_CALL_FAILURE, error: e });
  }
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
