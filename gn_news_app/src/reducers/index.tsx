import { combineReducers, Reducer, Dispatch, AnyAction } from 'redux';
import axios from 'axios';

export interface AppState {
  toggleList: boolean;
  articles: Article[];
}

export interface AppAction {
  type: string;
  payload?: any;
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const toggleListReducer: Reducer<boolean, AppAction> = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST':
      return !state;
    default:
      return state;
  }
};

const articlesReducer: Reducer<Article[], AppAction> = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer: Reducer<AppState, AppAction> = combineReducers({
  toggleList: toggleListReducer,
  articles: articlesReducer,
});


export const fetchArticles = () => async (dispatch: Dispatch<AnyAction>) => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=pl&apiKey=8c278600340c441b8ac520d96698a3d1");
  const articles = response.data.articles;
  dispatch({ type: "ADD_ARTICLES", payload: articles });
};


export default rootReducer;
