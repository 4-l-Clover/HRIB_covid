import actions from '../actions/Auth';
import { getUserAuth, removeUserAuth } from '../../util/localStorageUtil';

const initState = {
  userAuth: getUserAuth(),
  isUserAuthLoading: false,
  errorUserAuthMsg: null,

  signUpResult: null,
  isSignUpLoading: false,
  errorSignUpMsg: null,
  
  signUpConfirmResult: null,
  isSignUpConfirmLoading: false,
  errorSignUpConfirmMsg: null,

  signOutResult: null,
  isSignOutLoading: false,
  errorSignOutMsg: null,

};

export default function Auth(state = initState, { type, payload }) {
  switch (type) {
    case actions.REMOVE_USER_AUTH:
      removeUserAuth();
      return {
        ...state,
        userAuth: null,
      };
      
    case actions.USER_SIGNIN_REQUEST:
      return {
        ...state,
        isUserAuthLoading: true,
        errorUserAuthMsg: null,
      };

    case actions.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        isUserAuthLoading: false,
        userAuth: payload,
      };

    case actions.USER_SIGNIN_FAILED:
      return {
        ...state,
        isUserAuthLoading: false,
        errorUserAuthMsg: payload,
      };
      
    case actions.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isSignUpLoading: true,
        errorSignUpMsg: null,
        signUpResult: null,
      };

    case actions.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
        signUpResult: payload,
      };

    case actions.USER_SIGNUP_FAILED:
      return {
        ...state,
        isSignUpLoading: false,
        errorSignUpMsg: payload,
      };
      
    case actions.USER_SIGNUP_CONFIRM_REQUEST:
      return {
        ...state,
        isSignUpConfirmLoading: true,
        errorSignUpConfirmMsg: null,
        signUpConfirmResult: null,
      };

    case actions.USER_SIGNUP_CONFIRM_SUCCESS:
      return {
        ...state,
        isSignUpConfirmLoading: false,
        signUpConfirmResult: payload,
      };

    case actions.USER_SIGNUP_CONFIRM_FAILED:
      return {
        ...state,
        isSignUpConfirmLoading: false,
        errorSignUpConfirmMsg: payload,
      };

    case actions.USER_SIGNOUT_REQUEST:
      return {
        ...state,
        isSignOutLoading: true,
        errorSignOutMsg: null,
      };

    case actions.USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        isSignOutLoading: false,
        signOutResult: payload,
      };

    case actions.USER_SIGNOUT_FAILED:
      return {
        ...state,
        isSignOutLoading: false,
        errorSignOutMsg: payload,
      };

    default:
      return state;
  }
}
