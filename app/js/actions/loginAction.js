'use strict';

import * as constants from '../constants/loginConstant'
import FetchUtils, { LoginUrl } from '../utils/FetchUtils'


export function login(data) {
    console.log('login')
    return dispatch => {
        dispatch(isLogining())
        new FetchUtils().postFetchData(LoginUrl, data).then(result => {
            dispatch(loginSuccess(true, result))
        }).catch(error => {
            dispatch(loginError(false))
        })
    }
}

function isLogining() {
    return {
        type: constants.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, loginInfo) {
    console.log("loginSuccess")
    return {
        type: constants.LOGIN_IN_DONE,
        loginInfo: loginInfo
    }
}

function loginError(isSuccess) {
    console.log("loginError")
    return {
        type: constants.LOGIN_IN_ERROR
    }
}