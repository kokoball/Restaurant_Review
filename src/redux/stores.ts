import { applyMiddleware, createStore } from 'redux';
import { RootReducer } from '@redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export default store;
