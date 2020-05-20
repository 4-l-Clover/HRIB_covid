import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';
import actions from '../actions/Setting';
import { getHeaders } from '../../util/authUtil';
import { getEndpoint } from '../../util/urlHelper';
import { getUserAuth, saveUserInfo, getUserInfo } from "../../util/localStorageUtil";

export function* getSetting() {
  yield takeEvery(actions.GET_SETTING_REQUEST, function*({ payload }) {
    const userAuth = getUserAuth();
    if(!userAuth){
      console.error('>>>>> Oops, Not Authenticated(get setting)');
      return;
    }
    const params = {
        url: getEndpoint(`user/details/${userAuth.uuid}`),
        method: 'get',
    }

    try {
        const res = yield call(axios.request, params);
        if(res.data.status === 'success') {
          saveUserInfo(res.data.result);
          yield put(actions.getSettingSuccess(res.data.result));
        }
        else {
          yield put(actions.getSettingFailed(res.data.result));
        }
    } catch (err) {
        yield put(actions.getSettingFailed(JSON.stringify(err)));
    }
  });
}

export function* setSetting() {
  yield takeEvery(actions.SET_SETTING_REQUEST, function*({ payload }) {
    const userInfo = getUserInfo();
    if(!userInfo){
      console.error('>>>>> Oops, Not Authenticated(set setting)');
      return;
    }
    const data = {
      language_preference: payload.language_preference,
      gps_preference: payload.gps_preference,
      timezone_preference: payload.timezone_preference,
    }
    if(payload.public_name)
      data['public_name'] = payload.public_name
    if(payload.showTour) {
      data['show_tour'] = payload.showTour;
    }
    const params = {
        url: getEndpoint('user'),
        method: 'put',
        headers: getHeaders(),
        data
    }

    try {
        const res = yield call(axios.request, params);
        if(res.data.status === 'success') {
            saveUserInfo(res.data.result);
            yield put(actions.setSettingSuccess(res.data.result));
        }
        else {
            yield put(actions.setSettingFailed(res.data.result));
        }
    } catch (err) {
        yield put(actions.setSettingFailed(JSON.stringify(err)));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getSetting),
    fork(setSetting),
  ]);
}
