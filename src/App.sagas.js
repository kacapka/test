import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./App.actions";
import Api from "./App.api";

function* fetchUsers(api, action) {
    console.log('fetch users');
    try {
        const { data } = yield call(api.fetchUsers);
        console.log(data);
        yield put({
            type: ActionTypes.fetchUsersCompleted,
            payload: { users: data }
        });
    } catch (error) {
        // handle error
        console.log(error.response);
    }
}

function* init() {
    console.log('init');
    const api = new Api();
    yield takeEvery(ActionTypes.fetchUsers, fetchUsers, api);
}

export default init;
