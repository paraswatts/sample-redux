
import { takeLatest, all, put, delay, takeEvery } from "redux-saga/effects";
import {
    USERS_REQUEST,
    saveUsers,
    NEW_USER_REQUEST,
    addUserSuccess
} from '../actions';
const api = require(`../../shared/api`);
const { postRequest, getRequest } = require(`../../helpers`);


function* getUsersList({ payload: { success, fail } = {} }) {
    try {
        const response = yield getRequest({ API: `${api.URL.USERS}` });
        console.log(response.status)
        if (response && response.status === 200) {
            console.log("here")
            if (response && response.data && response.data.length) {
                console.log("adbdas")
                success(response.data)
                yield put(saveUsers(response.data))
            }
        }
    }
    catch (err) {
        fail({
            msg: 'Sorry, something went wrong.'
        })
    }
}

function* addNewUser({ payload: { payload = {}, success, fail } = {} }) {
    try {
        const response = yield postRequest({ API: `${api.URL.USERS}`, DATA: { ...payload } });
        console.log("response", response)
        if (response && response.data) {
            yield put(addUserSuccess(response.data))
        }

    }
    catch (err) {
        console.log("err", err)
        fail({
            msg: 'Sorry, something went wrong.'
        })
    }
}


function* UsersSaga() {
    yield all([
        takeLatest(USERS_REQUEST, getUsersList),
        takeLatest(NEW_USER_REQUEST, addNewUser)
    ]);
}

export default UsersSaga;
