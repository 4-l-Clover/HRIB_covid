const actions = {
  
  INIT_URL: 'INIT_URL',

  REMOVE_USER_AUTH: 'REMOVE_USER_AUTH',

  USER_SIGNIN_REQUEST: 'USER_SIGNIN_REQUEST',
  USER_SIGNIN_SUCCESS: 'USER_SIGNIN_SUCCESS',
  USER_SIGNIN_FAILED: 'USER_SIGNIN_FAILED',
  
  USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
  USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
  USER_SIGNUP_FAILED: 'USER_SIGNUP_FAILED',
  
  USER_SIGNUP_CONFIRM_REQUEST: 'USER_SIGNUP_CONFIRM_REQUEST',
  USER_SIGNUP_CONFIRM_SUCCESS: 'USER_SIGNUP_CONFIRM_SUCCESS',
  USER_SIGNUP_CONFIRM_FAILED: 'USER_SIGNUP_CONFIRM_FAILED',

  USER_SIGNOUT_REQUEST: 'USER_SIGNOUT_REQUEST',
  USER_SIGNOUT_SUCCESS: 'USER_SIGNOUT_SUCCESS',
  USER_SIGNOUT_FAILED: 'USER_SIGNOUT_FAILED',

  setInitUrl: payload => {
    return {
      type: actions.INIT_URL,
      payload: payload
    }
  },

  removeUserAuth: () => ({
    type: actions.REMOVE_USER_AUTH,
  }),

  userSignin: payload => ({
    type: actions.USER_SIGNIN_REQUEST,
    payload,
  }),
  userSigninSuccess: payload => ({
    type: actions.USER_SIGNIN_SUCCESS,
    payload,
  }),
  userSigninFailed: payload => ({
    type: actions.USER_SIGNIN_FAILED,
    payload,
  }),
  
  userSignup: payload => ({
    type: actions.USER_SIGNUP_REQUEST,
    payload,
  }),
  userSignupSuccess: payload => ({
    type: actions.USER_SIGNUP_SUCCESS,
    payload,
  }),
  userSignupFailed: payload => ({
    type: actions.USER_SIGNUP_FAILED,
    payload,
  }),
  
  userSignupConfirm: payload => ({
    type: actions.USER_SIGNUP_CONFIRM_REQUEST,
    payload,
  }),
  userSignupConfirmSuccess: payload => ({
    type: actions.USER_SIGNUP_CONFIRM_SUCCESS,
    payload,
  }),
  userSignupConfirmFailed: payload => ({
    type: actions.USER_SIGNUP_CONFIRM_FAILED,
    payload,
  }),

  userSignout: payload => ({
    type: actions.USER_SIGNOUT_REQUEST,
    payload,
  }),
  userSignoutSuccess: payload => ({
    type: actions.USER_SIGNOUT_SUCCESS,
    payload,
  }),
  userSignoutFailed: payload => ({
    type: actions.USER_SIGNOUT_FAILED,
    payload,
  }),

};

export default actions;
