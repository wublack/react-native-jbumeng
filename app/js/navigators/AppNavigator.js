import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'

const SwitchNavigate = createSwitchNavigator({
    LoginPage: {
        screen: LoginPage
    },
    MainPage: {
        screen: MainPage
    },
}, {
        initialRouteName: 'LoginPage'
    })
export default AppNavigator = createStackNavigator({
    SwitchNavigate: {
        screen: SwitchNavigate
    }
}, {
        navigationOptions: {
            gesturesEnabled: true,
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,
        }
    })