import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import logout from './logout';
import signup from './signup';
import login from './login';
import getUser from './userInfo';
import homeReducer from './home';

const rootReducer = combineReducers({
  auth,
  logout,
  signup,
  login,
  user: getUser,
  home: homeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
