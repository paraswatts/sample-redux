export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";


export const getUsers = () => {
  return {
    type: USERS_REQUEST
  };
};

export const saveUsers = (data, success, failure) => {
  return {
    type: USERS_SUCCESS,
    data,
    success,
    failure,
  };
};

