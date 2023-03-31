import {
  AppAction,
  Article,
  TOGGLE_LIST,
  ADD_ARTICLES,
} from "../types/globalTypes";

export function toggleList(isList: boolean): AppAction {
  return {
    type: TOGGLE_LIST,
    payload: isList,
  };
}

export function addArticles(articles: Article[]): AppAction {
  return {
    type: ADD_ARTICLES,
    payload: articles,
  };
}
