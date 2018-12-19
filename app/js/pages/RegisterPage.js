import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";
import { screenW } from "../utils/ScreenUtil";
import md5 from "react-native-md5";
import ColorUtils from "../utils/ColorUtils";

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPwd: '',
            errorInfo: ''
        }
    }

    render() {
        return (
            <SafeAreaViewPlus
                bottomInset={false}
                bottomColor={'white'}
                topColor={'white'}>
                <NavigationBar statusBar={{ hidden: false, barStyle: 'dark-content', translucent: false }} title={'用户注册'} style={{ backgroundColor: 'white' }} />
                <View style={{ height: 1, width: screenW, backgroundColor: ColorUtils.divider_color }} />
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder={'手机号码'} autoCapitalize={'none'} value={this.state.userName} maxLength={30}
                            style={styles.inputStyle} onChangeText={(text) => this.setState({
                                userName: text
                            })} underlineColorAndroid="transparent"></TextInput>
                        <View style={{ height: 1, width: screenW - 70, backgroundColor: ColorUtils.divider_color, }}></View>
                        <TextInput placeholder={'输入密码'} value={this.state.userPwd} secureTextEntry={true} maxLength={30}
                            style={styles.inputStyle} onChangeText={(text) => this.setState({
                                userPwd: text
                            })} underlineColorAndroid="transparent"></TextInput>
                        <View style={{ height: 1, width: screenW - 70, backgroundColor: ColorUtils.divider_color }}></View>
                        <TextInput placeholder={'确认密码'} value={this.state.userPwd} secureTextEntry={true} maxLength={30}
                            style={styles.inputStyle} onChangeText={(text) => this.setState({
                                userPwd: text
                            })} underlineColorAndroid="transparent"></TextInput>
                        <View style={{ height: 1, width: screenW - 70, backgroundColor: ColorUtils.divider_color }}></View>
                        <View style={{ flexDirection: 'row', width: screenW - 70 }}>
                            <View style={{ flex: 2 }}>
                                <TextInput placeholder={'输入图形验证码'} autoCapitalize={'none'}
                                    value={this.state.userName} maxLength={30} style={styles.codeStyle}
                                    onChangeText={(text) => this.setState({
                                        userName: text
                                    })} underlineColorAndroid="transparent"></TextInput>
                                <View style={{ height: 1, backgroundColor: ColorUtils.divider_color }}></View>
                            </View>
                            <Image style={{ backgroundColor: 'red', height: 30, width: 60, flex: 1, marginTop: 30 }} />
                        </View>
                        <View style={{ flexDirection: 'row', width: screenW - 70 }}>
                            <View style={{ flex: 1 }}>
                                <TextInput placeholder={'输入手机验证码'} autoCapitalize={'none'}
                                    value={this.state.userName} maxLength={30} style={styles.codeStyle}
                                    onChangeText={(text) => this.setState({
                                        userName: text
                                    })} underlineColorAndroid="transparent"></TextInput>
                                <View style={{ height: 1, backgroundColor: ColorUtils.divider_color }}></View>
                            </View>
                            <Image style={{ backgroundColor: 'red', height: 30, width: 60, flex: 1, marginTop: 30 }} />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                // this.props.navigation.push('SelectLabelPage')
                                this.props.navigation.push('IndustryPage')

                            }}
                            style={{ marginTop: 30, justifyContent: 'center', width: screenW - 56, height: 46, borderRadius: 5, backgroundColor: ColorUtils.default_backcolor, alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: 'white' }}>注册</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
                            <Text style={{ color: ColorUtils.default_gray_color, fontSize: 12 }}>登录注册表示阅读并同意本平台</Text>
                            <Text style={{ color: ColorUtils.default_backcolor, fontSize: 12, marginLeft: 3 }}>【会员注册协议】</Text>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaViewPlus>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: screenW - 56,
        marginLeft: 23,
        marginRight: 23,
        color: '#4E4E4E',
        height: 46,
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: 20
    },
    codeStyle: {
        marginRight: 23,
        color: '#4E4E4E',
        height: 46,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10
    }
})
