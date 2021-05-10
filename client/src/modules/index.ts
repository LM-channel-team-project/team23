import { combineReducers } from 'redux';
import auth from './auth';
import logout from './logout';
import signup from './signup';
import login from './login';

const rootReducer = combineReducers({
  auth,
  logout,
  signup,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
