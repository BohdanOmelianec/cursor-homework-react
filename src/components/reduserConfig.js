import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduser from './reduser';
import reduserUser from './reduserUser';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    reduser,
    reduserUser,
})

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;