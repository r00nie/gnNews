import { combineReducers, Reducer } from "redux";
import { AppState, AppAction, Article } from "../types/globalTypes";

const listVisibilityReducer: Reducer<boolean, AppAction> = (
  state = true,
  action
) => {
  switch (action.type) {
    case "TOGGLE_LIST":
      return !state;
    default:
      return state;
  }
};

const articlesReducer: Reducer<Article[], AppAction> = (state = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer: Reducer<AppState, AppAction> = combineReducers({
  listVisibility: listVisibilityReducer,
  articles: articlesReducer,
});

export default rootReducer;
