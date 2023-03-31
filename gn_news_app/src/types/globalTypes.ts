/* Atricle types */
export type Article = {
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
};

export interface ArticlesProps {
  articles: Article[];
}

/* Redux types */
export interface AppState {
  listVisibility: boolean;
  articles: Article[];
}

export const TOGGLE_LIST = "TOGGLE_LIST";
export const ADD_ARTICLES = "ADD_ARTICLES";

interface ToggleListAction {
  type: typeof TOGGLE_LIST;
  payload: boolean;
}

interface AddArticlesAction {
  type: typeof ADD_ARTICLES;
  payload: Article[];
}

export type AppAction = ToggleListAction | AddArticlesAction;

/* Header types */
export interface HeaderProps {
  title: string;
}
