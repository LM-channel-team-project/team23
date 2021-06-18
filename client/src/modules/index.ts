import { combineReducers } from 'redux';
import auth from './auth';
import logout from './logout';
import signup from './signup';
import login from './login';
import getUser from './userInfo';

const rootReducer = combineReducers({
  auth,
  logout,
  signup,
  login,
  user: getUser,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
