import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReducer from '../reducers/contacts';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
