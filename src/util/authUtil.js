import { getUserInfo, getUserAuth } from "./localStorageUtil";

export const getHeaders = (onlyOrganization = true) => {
  const userInfo = getUserInfo();
  if(!userInfo) {
    console.error('>>>>> Oops, Not Authenticated');
    return null;
  }
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'access_key': userInfo.adapt_access_key,
    'secret_key': userInfo.adapt_secret_key
  };
  if(!onlyOrganization) headers['organisation_only'] = false;
  
  return headers;
};

export const getToken = () => {
  const userAuth = getUserAuth()
  if(!userAuth) {
    console.error('>>>> Ooops, Not Authenticated')
    return null
  }
  return userAuth.access_token
}
