import { takeEvery, call, put } from 'redux-saga/effects'; 
import { USER_LIST, userListSuccess, userListFailure } from './constants'; 

function* UserList() {
    try {
        const url = "https://dummyjson.com/users";
        const response = yield call(fetch, url); 
        const data = yield call([response, 'json']); 
        yield put(userListSuccess(data)); 

        console.warn("Data in Saga",data);
    } catch (error) {
        yield put(userListFailure(error)); 
    }
}

function* SagaData() {
    yield takeEvery(USER_LIST, UserList);
}

export default SagaData;
