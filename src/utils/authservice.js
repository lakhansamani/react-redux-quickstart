import cookie from 'react-cookie';
function checkLogin(){
    if(cookie.load('authData')){
        return true;
    }
    else{
        return false;
    }
}
function getAccessToken(){
  if(cookie.load('authData')){
    let data = cookie.load('authData');
    return data.token;
  }
}
function getLoginData(){
    if(cookie.load('authData')){
        return cookie.load('authData');
    }
    else{
        return null;
    }
}
function requireAuth(nextState, replace) {
  if (!checkLogin()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
export{
    checkLogin,
    getLoginData,
    requireAuth,
    getAccessToken
};
