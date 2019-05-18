import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { http_reducer } from "./redux/reducer";
import rootSaga from "./redux/saga";

// run the saga

it("renders without crashing", () => {
  // create the saga middleware

  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    http_reducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
