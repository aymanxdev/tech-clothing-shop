import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
