import { REHYDRATE } from "redux-persist";
import {
  USERS_SUCCESS
} from "../actions";

const initialCommonState = {
  users: null,
};

const UsersReducers = (state = { ...initialCommonState }, action) => {
  // ADD_IMAGES
  switch (action.type) {
    case USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
      };

    case REHYDRATE:
      let common =
        ((action || {}).payload || {}).UsersReducers ||
        initialCommonState;
      return {
        ...state,
        users: common.usres,
      };
    default:
      return state;
  }
};

export default UsersReducers;
