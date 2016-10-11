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
export{
    checkLogin,
    getLoginData
};
