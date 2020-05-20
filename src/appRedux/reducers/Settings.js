import actions from '../actions/Setting';
import { getUserInfo, removeUserInfo } from '../../util/localStorageUtil';

const initState = {
  setting: getUserInfo(),
  isLoading: false,
  errorMsg: null,
};

export default function Settings(state = initState, { type, payload }) {
  switch (type) {
    case actions.REMOVE_SETTING:
      removeUserInfo();
      return {
        ...state,
        setting: null,
      };

    case actions.GET_SETTING_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      };

    case actions.GET_SETTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        setting: payload,
      };

    case actions.GET_SETTING_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
      
    case actions.SET_SETTING_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      };

    case actions.SET_SETTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        setting: payload,
      };

    case actions.SET_SETTING_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };

    default:
      return state;
  }
}
