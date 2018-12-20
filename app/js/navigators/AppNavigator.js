import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import React from 'react'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import SelectLabelPage from '../pages/SelectLabelPage';
import SeletAddressPage from "../pages/SeletAddressPage";
import FindPwdPage from '../pages/FindPwdPage';
import IndustryPage from '../pages/IndustryPage';
import ProjectList from "../pages/ProjectList";
import CategoryPage from "../pages/CategoryPage";
import { screenW } from '../utils/ScreenUtil';

const SwitchNavigate = createSwitchNavigator({
    LoginPage: {
        screen: LoginPage
    },
    RegisterPage: {
        screen: RegisterPage
    },
    MainPage: {
        screen: MainPage
    },
}, {
        initialRouteName: 'LoginPage'
    })
const DrawerNavigate = createDrawerNavigator({
    ProjectList: {
        screen: ProjectList
    }
}, {
        contentComponent: CategoryPage,
        drawerPosition: "right",
        drawerLockMode: "locked-closed",
        drawerWidth: screenW - 45
    })

export default AppNavigator = createStackNavigator({
    LoginPage: {
        screen: LoginPage
    },
    RegisterPage: {
        screen: RegisterPage
    },
    MainPage: {
        screen: MainPage
    },
    SelectLabelPage: {
        screen: SelectLabelPage
    },
    SelectAddressPage: {
        screen: SeletAddressPage
    },
    FindPwdPage: {
        screen: FindPwdPage
    },
    IndustryPage: {
        screen: IndustryPage
    },
    ProjectListCategory: {
        screen: DrawerNavigate
    }
}, {
        navigationOptions: {
            gesturesEnabled: true,
            tabBarVisible: false, // 隐藏底部导航栏
            header: null,
        }
    })
