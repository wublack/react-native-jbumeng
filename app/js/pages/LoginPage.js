import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    StatusBar,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import * as loginAction from '../actions/loginAction'
import FetchUtils, { LoginUrl } from '../utils/FetchUtils'
import LocalSaveDao, { LOCAL_SAVE_KEYS } from '../dao/LocalSaveDao'
import PopupDialog, {
    SlideAnimation,
} from 'react-native-popup-dialog'
import md5 from "react-native-md5"
import { Loading, EasyLoading } from '../components/Loading';
const fadeAnimation = new SlideAnimation({ animationDuration: 150 });
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;
import SplashScreen from 'react-native-splash-screen'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.fetchUtils = new FetchUtils()
        this.localSaveDao = new LocalSaveDao()
        this.state = {
            userName: '',
            userPwd: '',
            errorInfo: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(JSON.stringify(nextState))
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            this.props.navigation.navigate('MainPage', { token: '传过去的值' })
            return false
        }
        return true
    }

    componentWillMount() {
        this.getLoginInfo()
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    /**
     * 获取本地登录信息
     */
    getLoginInfo() {
        this.localSaveDao.getLocalSaveInfo(LOCAL_SAVE_KEYS.LOGIN_INFO_KEY).then(result => {
            this.setState({
                userName: result.userName,
                userPwd: result.userPwd
            })
        }).catch(error => {

        })
    }

    /**
     * 登录
     */
    loginInfo() {
        EasyLoading.show('正在登录...')
        let data = { "FUserName": this.state.userName, "FAction": "APP", "FVersion": "1.0.0", "FPassword": md5.hex_md5(this.state.userPwd) }
        this.fetchUtils.postFetchData(LoginUrl, data).then(result => {
            EasyLoading.dismis()
            console.log('loginInfo-', JSON.stringify(result))
            if (result && result.Result === 200) {
                let tokenValue = result.FObject[0].FToken
                this.props.navigation.navigate('MainPage', { token: tokenValue })
                result.userName = this.state.userName
                result.userPwd = this.state.userPwd
                this.localSaveDao.setLocalSaveInfo(LOCAL_SAVE_KEYS.LOGIN_INFO_KEY, JSON.stringify(result))
            } else if (result.Result === 103) {
                this.setState({
                    errorInfo: '账号或密码错误，请重新填写'
                })
                this.showFadeAnimationDialog()
            } else {
                this.setState({
                    errorInfo: '系统异常，请稍后重试'
                })
                this.showFadeAnimationDialog()
            }
        }).catch(error => {
            EasyLoading.dismis()
            this.setState({
                errorInfo: '系统异常，请稍后重试'
            })
            this.showFadeAnimationDialog()
        })
    }

    /**
     * 展示弹窗
     */
    showFadeAnimationDialog() {
        if (this.fadeAnimationDialog) {
            this.fadeAnimationDialog.show();
        }
    }

    render() {
        const { login } = this.props
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View >
                    <StatusBar barStyle='dark-content'
                        hidden={false} backgroundColor="white" />
                    <View style={[styles.inputContainer, { marginTop: 135 }]}>
                        <Image style={styles.inputImg} source={require('../../img/login_name.png')}></Image>
                        <TextInput autoCapitalize={'none'} value={this.state.userName} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userName: text
                        })} underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <View style={[styles.inputContainer, { marginTop: 15 }]}>
                        <Image style={styles.inputImg} source={require('../../img/login_pwd.png')}></Image>
                        <TextInput value={this.state.userPwd} secureTextEntry={true} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userPwd: text
                        })} underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            let data = { "FUserName": this.state.userName, "FAction": "APP", "FVersion": "1.0.0", "FPassword": md5.hex_md5(this.state.userPwd) }
                            console.log(JSON.stringify(data))
                            login(data)

                        }}
                        style={[styles.inputContainer, { marginTop: 35, backgroundColor: '#0EAFF8', justifyContent: 'center' }]}>
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ width: 60, alignSelf: 'center', marginTop: 14 }} onPress={() => {
                        // this.props.navigation.push('MessageLogin')
                    }}>
                        {/* <Text style={{ color: 'transparent' }}>短信登录</Text> */}
                    </TouchableOpacity>
                    <Text style={styles.companyText}></Text>
                </View >
                <Loading />
                <PopupDialog
                    width={256}
                    height={168}
                    dialogAnimation={fadeAnimation}
                    ref={(fadeAnimationDialog) => {
                        this.fadeAnimationDialog = fadeAnimationDialog
                    }}>
                    <View style={styles.dialogContentView}>
                        <Text style={styles.dialogTitle}>登入失败</Text>
                        <Text style={styles.dialogContent}>{this.state.errorInfo}</Text>
                        <TouchableOpacity style={styles.rightButton} activeOpacity={0.7} onPress={() => {
                            this.fadeAnimationDialog.dismiss()
                        }}>
                            <Text style={styles.sureText}>确定</Text>
                        </TouchableOpacity>
                    </View>
                </PopupDialog>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    companyText: {
        textAlign: 'center',
        marginTop: 85
    },
    loginText: {
        textAlign: 'center',
        color: 'white'
    },
    headerImg: {
        alignSelf: 'center',
        marginTop: 101
    },
    inputContainer: {
        height: 45,
        marginLeft: 35,
        marginRight: 35,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0EAFF8',
        borderRadius: 28,
        borderWidth: 1
    },
    inputStyle: {
        width: 300,
        color: '#4E4E4E'
    },
    inputImg: {
        marginLeft: 10
    },
    statusBar: {
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    dialogContentView: {
        flex: 1,
    },
    dialogTitle: {
        marginTop: 45,
        marginLeft: 38,
        fontSize: 18,
        color: '#666666'
    },
    dialogContent: {
        fontSize: 13,
        color: '#666666',
        marginLeft: 33,
        marginRight: 33,
        marginTop: 16
    },
    rightButton: {
        alignSelf: 'flex-end',
        marginRight: 25,
        marginTop: 29
    },
    leftButton: {
        marginLeft: 25,
        marginTop: 29
    },
    sureText: {
        color: '#0EAFF8',
        fontSize: 13,
        textAlign: 'center',
        width: 60
    }
})
export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)(LoginPage)
