import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import actions from "../actions/Auth";
import settingActions from "../actions/Setting";
import { getEndpoint } from "../../util/urlHelper";
import {
  saveUserAuth,
  removeLogTime,
} from "../../util/localStorageUtil";
import { getToken } from "../../util/authUtil";

export function* signInUser() {
  yield takeEvery(actions.USER_SIGNIN_REQUEST, function* ({ payload }) {
    const { username, password, remember } = payload;
    const data = {
      email: username.toLowerCase(),
      password: password,
    };
    const params = {
      url: getEndpoint("authentication/login"),
      method: "post",
      data,
    };

    try {
      const res = yield call(axios.request, params);
      if (res.data.status === "success") {
        saveUserAuth({ ...res.data, remember: remember });
        yield put(settingActions.getSetting());
        yield put(actions.userSigninSuccess(res.data));
      } else {
        yield put(actions.userSigninFailed(res.data.result));
      }
    } catch (err) {
      yield put(actions.userSigninFailed(JSON.stringify(err)));
    }
  });
}

export function* signUpUser() {
  yield takeEvery(actions.USER_SIGNUP_REQUEST, function* ({ payload }) {
    const { username, password, organisation } = payload;
    const data = {
      email: username.toLowerCase(),
      password: password,
      organisation: organisation,
    };
    const params = {
      url: getEndpoint("authentication/signup"),
      method: "post",
      data,
    };

    try {
      const res = yield call(axios.request, params);
      if (res.data.status === "success") {
        yield put(actions.userSignupSuccess(res.data.result));
      } else {
        yield put(actions.userSignupFailed(res.data.result));
      }
    } catch (err) {
      yield put(actions.userSignupFailed(JSON.stringify(err)));
    }
  });
}

export function* signUpConfirm() {
  yield takeEvery(actions.USER_SIGNUP_CONFIRM_REQUEST, function* ({ payload }) {
    const { username, confirmCode } = payload;
    const data = {
      email: username.toLowerCase(),
      code: confirmCode.trim(),
    };
    const params = {
      url: getEndpoint("authentication/confirm_signup"),
      method: "post",
      data,
    };

    try {
      const res = yield call(axios.request, params);
      if (res.data.status === "success") {
        yield put(actions.userSignupConfirmSuccess(res.data.result));
      } else {
        yield put(actions.userSignupConfirmFailed(res.data.result));
      }
    } catch (err) {
      yield put(actions.userSignupConfirmFailed(JSON.stringify(err)));
    }
  });
}

export function* signOutUser() {
  yield takeEvery(actions.USER_SIGNOUT_REQUEST, function* ({ payload }) {
    console.log('.... sign-out saga')
    const data = {
      access_token: getToken(),
    };
    const params = {
      url: getEndpoint("authentication/logout"),
      method: "post",
      data,
    };

    try {
      const res = yield call(axios.request, params);
      console.log('.... sign-out saga result', res.data)
      yield put(actions.removeUserAuth());
      yield put(settingActions.removeSetting());
      removeLogTime();
      if (res.data.status === "success") {
        yield put(actions.userSignoutSuccess(res.data.result));
      } else {
        yield put(actions.userSignoutFailed(res.data.result));
      }
    } catch (err) {
      yield put(actions.removeUserAuth());
      yield put(settingActions.removeSetting());
      removeLogTime();
      yield put(actions.userSignoutFailed(JSON.stringify(err)));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(signInUser),
    fork(signUpUser),
    fork(signUpConfirm),
    fork(signOutUser),
  ]);
}
