import thunk from 'redux-thunk';
import {createStore, applyMiddleware,combineReducers} from 'redux';
import reducerKnowledgeLanguage from './src/redux/reducers/ReducerKnownLanguage';

const rootReducer=combineReducers({ reducerKnowledgeLanguage:reducerKnowledgeLanguage
})
// Passing burgerReducer to createStore
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;





