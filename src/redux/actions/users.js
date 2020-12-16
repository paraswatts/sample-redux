export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";

export const NEW_USER_REQUEST = "NEW_USER_REQUEST";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";

export const getUsers = (payload) => {
  return {
    type: USERS_REQUEST,
    payload
  };
};

export const saveUsers = (payload) => {
  return {
    type: USERS_SUCCESS,
    payload
  };
};

export const addUserRequest = (payload) => {
  return {
    type: NEW_USER_REQUEST,
    payload
  };
};

export const addUserSuccess = (payload) => {
  return {
    type: NEW_USER_SUCCESS,
    payload
  };
};

