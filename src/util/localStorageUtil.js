export const ADAPT_TOKEN = "ADAPT_TOKEN";
export const ADAPT_USER = "ADAPT_USER";
export const ADAPT_AUTH = "ADAPT_AUTH";
export const ADAPT_CANDIDATE = "ADAPT_CANDIDATE";
export const ADAPT_LOG_TIME = "ADAPT_LOG_TIME";
export const LOG_OUT_TIME = 86400000; // 1 day
// export const LOG_OUT_TIME = 1800000; // 30 min

export const saveUserAuth = (data) => {
  if (data.status !== "success") return;
  const copyData = { ...data };
  delete copyData["status"];
  delete copyData["remember"];
  data.remember
    ? localStorage.setItem(ADAPT_AUTH, JSON.stringify(copyData))
    : localStorage.setItem(
        ADAPT_AUTH,
        JSON.stringify({ ...copyData, expiryDate: "y" })
      );
};

export const getUserAuth = () => {
  const data = localStorage.getItem(ADAPT_AUTH);
  return JSON.parse(data);
};

export const removeUserAuth = () => {
  localStorage.removeItem(ADAPT_AUTH);
};

export const getUserInfo = () => {
  const data = localStorage.getItem(ADAPT_USER);
  return JSON.parse(data);
};

export const saveUserInfo = (data) => {
  localStorage.setItem(ADAPT_USER, JSON.stringify(data));
};

export const removeUserInfo = () => {
  localStorage.removeItem(ADAPT_USER);
};

export const saveLogTime = () => {
  localStorage.setItem(ADAPT_LOG_TIME, new Date().getTime());
};

export const getLogTime = () => {
  const time = localStorage.getItem(ADAPT_LOG_TIME);
  return time;
};

export const removeLogTime = () => {
  localStorage.removeItem(ADAPT_LOG_TIME);
};

export const isExpired = () => {
  const userAuth = getUserAuth();
  const logTime = getLogTime();
  if (
    userAuth &&
    userAuth.expiryDate &&
    logTime &&
    new Date().getTime() - logTime > LOG_OUT_TIME
  ) {
    removeLogTime();
    return true;
  }
  return false;
};

// export const saveToken = token => {
//   localStorage.setItem(ADAPT_TOKEN, token);
// };

// export const getToken = () => {
//   const token = localStorage.getItem(ADAPT_TOKEN);
//   return token;
// };

// export const removeToken = () => {
//   localStorage.removeItem(ADAPT_TOKEN);
// };

// export const saveUser = user => {
//   localStorage.setItem(ADAPT_USER, JSON.stringify(user));
// };

// export const getUser = () => {
//   const user = localStorage.getItem(ADAPT_USER);
//   return user ? JSON.parse(user) : null;
// };

// export const existUser = () => {
//   const user = localStorage.getItem(ADAPT_USER);
//   return user ? true : false;
// };

// export const removeUser = () => {
//   removeToken();
//   localStorage.removeItem(ADAPT_USER);
// };
