import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { AppState, AppAction } from "../types/globalTypes";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

const composeEnhancers =
  (window as ExtendedWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<AppState, AppAction> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
