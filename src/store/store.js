import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { setLocalStore } from '@utils/localStorage';


export const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  setLocalStore('store', store.getState().favoriteReducer)
})