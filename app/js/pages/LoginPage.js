import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    StatusBar,
    TextInput,
    ScrollView
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
import LinearGradient from 'react-native-linear-gradient'
import { screenW } from '../utils/ScreenUtil'
import ShareUtil from '../utils/ShareUtil'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";

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
            <SafeAreaViewPlus topColor={'#52AFEA'} >
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <StatusBar barStyle='dark-content'
                        translucent={true}
                        hidden={false} backgroundColor="transparent" />
                    <LinearGradient colors={['#52AFEA', '#3C61DE']} style={{ height: 240, width: screenW, alignItems: 'center' }}>
                        <View style={{ height: 44, alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>会员登录</Text>
                        </View>
                        <Image style={{ backgroundColor: 'red', height: 54, width: 54, marginTop: 20 }}></Image>
                    </LinearGradient>
                    <View style={{ width: screenW, marginTop: -48 }}>
                        <View style={{ borderWidth: 1, borderColor: 'rgba(56,123,230,0.1)', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, height: 315, marginLeft: 15, marginRight: 15 }}>
                            <Text style={{ marginTop: 20, color: '#121C33', fontSize: 14, fontWeight: 'bold' }}>欢迎登录，家办联盟</Text>
                            <TextInput autoCapitalize={'none'} value={this.state.userName} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                                userName: text
                            })} underlineColorAndroid="transparent"></TextInput>
                            <TextInput value={this.state.userPwd} secureTextEntry={true} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                                userPwd: text
                            })} underlineColorAndroid="transparent"></TextInput>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenW - 56, marginTop: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#929FAD', fontSize: 12 }}>还没有账号</Text>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            this.props.navigation.navigate('RegisterPage')
                                        }}>
                                        <Text style={{ color: '#387BE6', fontSize: 12, marginLeft: 3 }}>去注册</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.push('SelectLabelPage')
                                }}>
                                    <Text style={{ color: '#929FAD', fontSize: 12 }}>忘记密码？</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    let data = { "FUserName": this.state.userName, "FAction": "APP", "FVersion": "1.0.0", "FPassword": md5.hex_md5(this.state.userPwd) }
                                    login(data)
                                }}
                                style={{ marginTop: 30, justifyContent: 'center', width: screenW - 56, height: 46, borderRadius: 5, backgroundColor: '#387BE6', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: 'white' }}>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ height: 1, width: 30, backgroundColor: '#e5e5e5' }}></View>
                            <Text style={{ color: '#929FAD', fontSize: 12, marginLeft: 20, marginRight: 20 }}>一键登录</Text>
                            <View style={{ height: 1, width: 30, backgroundColor: '#e5e5e5' }}></View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ height: 40, width: 40, backgroundColor: 'red', marginRight: 15, }}
                                onPress={() => {
                                    ShareUtil.auth(2, (code, result, message) => {
                                        // this.setState({result:message});
                                        console.log('message', message)
                                        if (code == 200) {
                                            // this.setState({result:result.uid});
                                        }
                                    });
                                }}>
                                <Image style={{ height: 40, width: 40 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ height: 40, width: 40, backgroundColor: 'red', marginLeft: 15, }}
                                onPress={() => {
                                    ShareUtil.auth(0, (code, result, message) => {
                                        console.log('message', message)
                                        // this.setState({result:message});
                                        if (code == 200) {
                                            // this.setState({result:result.uid});
                                        }
                                    });
                                }}>
                                <Image style={{ height: 40, width: 40 }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
                            <Text style={{ color: '#929FAD', fontSize: 12 }}>登录注册表示阅读并同意本平台</Text>
                            <Text style={{ color: '#387BE6', fontSize: 12, marginLeft: 3 }}>《用户协议》</Text>
                        </View>
                    </View>
                </ScrollView >
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
            </SafeAreaViewPlus>
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
        width: screenW - 56,
        marginLeft: 13,
        marginRight: 13,
        color: '#4E4E4E',
        backgroundColor: '#f8f8f8',
        height: 46,
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: 20
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
        login: (data) => dispatch(loginAction.login(data)),
    })
)(LoginPage)
