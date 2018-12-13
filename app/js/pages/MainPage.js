import React, {
    Component
} from 'react';

import {
    StyleSheet,
    StatusBar,
    DeviceEventEmitter,
    BackHandler,
    Platform
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from './HomePage'
import Message from './HomePage'
import Mine from './MinePage'
import TaskPage from './HomePage'
import FontIcon from '../components/FontIcon'
import SafeAreaViewPlus from '../components/SafeAreaViewPlus'
import Toast, { DURATION } from 'react-native-easy-toast'
export const FLAG_TAB = {
    flag_homeTab: 'tb_home',
    flag_messageTab: 'tb_message',
    flag_inspectTab: 'tb_inspect',
    flag_my: 'tb_my'
}
export const ACTION_HOME = {
    A_SHOW_TOAST: 'showToast', A_RESTART: 'restart',
    A_HOME_TAB_SELECT: 'home_tab_select'
}
export const EVENT_TYPE_HOME_TAB_SELECT = "home_tab_select";

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        let selectedTab = 'tb_home'
        this.state = {
            selectedTab: selectedTab,
            backCount: 0
        }
    }

    renderMenuItem(Component, selectedTab, title, renderIcon) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                titleStyle={{ fontSize: 13, marginTop: -1, color: '#666666' }}
                selectedTitleStyle={{ fontSize: 13, marginTop: -1, color: '#05A6DC' }}
                title={title}
                renderIcon={() => <FontIcon fontStyle={{
                    fontSize: 24,
                    color: '#666666',
                }} fontSource={renderIcon} />}
                renderSelectedIcon={() => <FontIcon fontStyle={{
                    fontSize: 24,
                    color: '#05A6DC',
                }} fontSource={renderIcon} />}
                onPress={() => this.onTabClick(this.state.selectedTab, selectedTab)}
            >
                <Component {...this.props} />
            </TabNavigator.Item>
        )
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener("back", this.onBackClicked);
        } else {

        }
    }

    componentDidMount() {

        this.listener = DeviceEventEmitter.addListener('ACTION_HOME',
            (action, params) => this.onAction(action, params));
        // this.update();
    }

    /**
     * 通知回调事件处理
     * @param action
     * @param params
     */
    onAction(action, params) {
        if (ACTION_HOME.A_RESTART === action) {
            this.onRestart(params)
        } else if (ACTION_HOME.A_SHOW_TOAST === action) {
            this.toast.show(params.text, DURATION.LENGTH_LONG);
        }
    }

    componentWillUnmount() {

        if (this.listener) {
            this.listener.remove();
        }
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener("back", this.onBackClicked);
        }
        if (this.backCountListener) {
            clearTimeout(this.backCountListener)
        }
    }

    onBackClicked = () => { // 默认 表示跳出RN
        if (this.props.navigation.isFocused()) {
            if (this.state.backCount == 0) {
                DeviceEventEmitter.emit('ACTION_HOME', ACTION_HOME.A_SHOW_TOAST, { text: '再按一次退出应用程序' })
                this.setState({
                    backCount: 1
                })
                this.clearBackCount()
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    clearBackCount() {
        this.backCountListener = setTimeout(() => {
            this.setState({
                backCount: 0
            })
        }, 3000)
    }

    onTabClick(from, to) {
        this.setState({ selectedTab: to })
        DeviceEventEmitter.emit(EVENT_TYPE_HOME_TAB_SELECT, from, to)
    }

    render() {
        const Root = <SafeAreaViewPlus
            topColor={'white'}
            bottomColor={'white'}
            bottomInset={false}
        >
            <TabNavigator tabBarStyle={{ backgroundColor: 'white', height: 49, }}>
                {this.renderMenuItem(HomeScreen, FLAG_TAB.flag_homeTab, '首页', 'Home')}
                {this.renderMenuItem(Message, FLAG_TAB.flag_messageTab, '消息', 'News')}
                {this.renderMenuItem(TaskPage, FLAG_TAB.flag_inspectTab, '任务', 'Task-')}
                {this.renderMenuItem(Mine, FLAG_TAB.flag_my, '我的', 'Itsmine')}
            </TabNavigator>
            <Toast ref={(toast) => this.toast = toast} />
        </SafeAreaViewPlus>
        return Root;
    }

}
