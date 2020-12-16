import { REHYDRATE } from "redux-persist";
import {
  USERS_SUCCESS,
  NEW_USER_SUCCESS
} from "../actions";

const initialCommonState = {
  users: null,
};

const UsersReducers = (state = { ...initialCommonState }, action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case NEW_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case REHYDRATE:
      let common =
        ((action || {}).payload || {}).UsersReducers ||
        initialCommonState;
      return {
        ...state,
        users: common.users,
      };
    default:
      return state;
  }
};

export default UsersReducers;
