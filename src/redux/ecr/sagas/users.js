
import { takeLatest, all, put, delay, takeEvery } from "redux-saga/effects";
import {
    USERS_REQUEST,
    saveUsers
} from '../actions';
const api = require(`../../../shared/api`);
const { updateAuthToken, postRequestNoAuth, postRequest, getRequest, putRequest, deleteRequest } = require(`../../../helpers/`);


function* getUsersList({ success = () => { }, failure = () => { } }) {
    try {
        const response = yield getRequest({ API: `${api.URL.USERS}` });
        console.log(response)
    }
    catch (err) {
        failure({
            msg: 'Sorry, something went wrong.'
        })
    }
}


function* UsersSaga() {
    yield all([
        takeLatest(USERS_REQUEST, getUsersList),
    ]);
}

export default UsersSaga;
