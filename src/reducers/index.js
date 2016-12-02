import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photos from './photos';
import detail from './photoDetail';

export const rootReducer = combineReducers({photos, detail, routing: routerReducer});
