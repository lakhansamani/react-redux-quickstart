function checkLogin(){
    if(localStorage.authData){
        return true;
    }
    else{
        return false;
    }
}
function getLoginData(){
    if(localStorage.authData){
        return localStorage.authData;
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
    requireAuth
};
