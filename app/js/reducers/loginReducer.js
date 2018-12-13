'use strict';
import * as constants from '../constants/loginConstant'

const initialState = {
    status: '点击登录',
    isSuccess: false,
    loginInfo: null
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case constants.LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在登录',
                isSuccess: false,
                loginInfo: null
            }
        case constants.LOGIN_IN_DONE:
            return {
                ...state,
                status: '登录成功',
                isSuccess: true,
                loginInfo: action.loginInfo
            }
        case constants.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录失败',
                isSuccess: true,
                loginInfo: null
            }
        default:
            console.log(state)
            return state
    }
}