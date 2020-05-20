const actions = {
  
  REMOVE_SETTING: 'REMOVE_SETTING',

  GET_SETTING_REQUEST: 'GET_SETTING_REQUEST',
  GET_SETTING_SUCCESS: 'GET_SETTING_SUCCESS',
  GET_SETTING_FAILED: 'GET_SETTING_FAILED',
  
  SET_SETTING_REQUEST: 'SET_SETTING_REQUEST',
  SET_SETTING_SUCCESS: 'SET_SETTING_SUCCESS',
  SET_SETTING_FAILED: 'SET_SETTING_FAILED',

  removeSetting: () => ({
    type: actions.REMOVE_SETTING,
  }),

  getSetting: payload => ({
    type: actions.GET_SETTING_REQUEST,
    payload,
  }),
  getSettingSuccess: payload => ({
    type: actions.GET_SETTING_SUCCESS,
    payload,
  }),
  getSettingFailed: payload => ({
    type: actions.GET_SETTING_FAILED,
    payload,
  }),
  
  setSetting: payload => ({
    type: actions.SET_SETTING_REQUEST,
    payload,
  }),
  setSettingSuccess: payload => ({
    type: actions.SET_SETTING_SUCCESS,
    payload,
  }),
  setSettingFailed: payload => ({
    type: actions.SET_SETTING_FAILED,
    payload,
  }),

};

export default actions;
