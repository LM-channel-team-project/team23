import { combineReducers } from 'redux';
import auth from './auth';
import getUser from './userInfo';

const rootReducer = combineReducers({
  auth,
  user: getUser,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
