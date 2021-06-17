import { getUsersInfo, IUsers } from '../api/users';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';

const GET_USER_BY_NICKNAME = 'GET_USER_BY_NICKNAME' as const;
const GET_USER_BY_NICKNAME_SUCCESS = 'GET_USER_BY_NICKNAME_SUCCESS' as const;
const GET_USER_BY_NICKNAME_ERROR = 'GET_USER_BY_NICKNAME_ERROR' as const;

export const getUserByNickname = () => ({
  type: GET_USER_BY_NICKNAME,
});

export const getUserByNicknameSuccess = (data: IUsers) => ({
  type: GET_USER_BY_NICKNAME_SUCCESS,
  payload: data,
});

export const getUserByNicknameError = (data: any) => ({
  type: GET_USER_BY_NICKNAME_ERROR,
  payload: data,
});

type GetUsersAction =
  | ReturnType<typeof getUserByNickname>
  | ReturnType<typeof getUserByNicknameSuccess>
  | ReturnType<typeof getUserByNicknameError>;

export function getUserThunk(
  nickname: string
): ThunkAction<Promise<void>, RootState, null, GetUsersAction> {
  return async (dispatch) => {
    dispatch(getUserByNickname());
    try {
      const response = await getUsersInfo(nickname);
      dispatch(getUserByNicknameSuccess(response));
    } catch (error) {
      dispatch(getUserByNicknameError(error));
    }
  };
}

type UserState = {
  loading: boolean;
  data: IUsers | null;
  error: Error | null;
  project: null;
};

const initialState: UserState = {
  loading: true,
  data: null,
  error: null,
  project: null,
};

export default function getUser(
  state: UserState = initialState,
  action: GetUsersAction
): UserState {
  switch (action.type) {
    case GET_USER_BY_NICKNAME:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
        project: null,
      };
    case GET_USER_BY_NICKNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        project: null,
      };
    case GET_USER_BY_NICKNAME_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
        project: null,
      };
    default:
      return state;
  }
}
