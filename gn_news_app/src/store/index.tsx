import { createStore, Store } from 'redux';
import rootReducer, { AppState, AppAction } from '../reducers';

const store: Store<AppState, AppAction> = createStore(rootReducer);

export default store;
