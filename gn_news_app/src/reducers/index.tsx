import { combineReducers, Reducer } from 'redux';

export interface AppState {
  toggleList: boolean;
}

export interface AppAction {
  type: string;
  payload?: any;
}

const toggleListReducer: Reducer<boolean, AppAction> = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST':
      return !state;
    default:
      return state;
  }
};

const rootReducer: Reducer<AppState, AppAction> = combineReducers({
  toggleList: toggleListReducer,
});

export default rootReducer;
