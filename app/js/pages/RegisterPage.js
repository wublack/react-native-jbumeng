import React from 'react'
import {View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";
import {screenW} from "../utils/ScreenUtil";
import md5 from "react-native-md5";

export  default  class RegisterPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            userPwd: '',
            errorInfo: ''
        }
    }

    render(){
        return(
            <SafeAreaViewPlus
                bottomInset={false}
                bottomColor={'white'}
                topColor={'white'}>
                <NavigationBar statusBar={{hidden:false,barStyle:'dark-content',translucent:false}}   title={'用户注册'} style={{backgroundColor:'white'}} />
                <View style={{height:1,width:screenW,backgroundColor:'#e5e5e5'}}/>
                <ScrollView style={{backgroundColor:'white'}}>
                    <View style={{alignItems:'center'}}>
                        <TextInput placeholder={'手机号码'}  autoCapitalize={'none'} value={this.state.userName} maxLength={30}
                                   style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userName: text
                        })} underlineColorAndroid="transparent"></TextInput>
                        <TextInput placeholder={'输入密码'} value={this.state.userPwd} secureTextEntry={true} maxLength={30}
                                   style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userPwd: text
                        })} underlineColorAndroid="transparent"></TextInput>
                        <TextInput placeholder={'确认密码'} value={this.state.userPwd} secureTextEntry={true} maxLength={30}
                                   style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userPwd: text
                        })} underlineColorAndroid="transparent"></TextInput>
                        <TextInput placeholder={'输入图形验证码'}  autoCapitalize={'none'} value={this.state.userName} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userName: text
                        })} underlineColorAndroid="transparent"></TextInput>
                        <TextInput placeholder={'输入手机验证码'}  autoCapitalize={'none'} value={this.state.userName} maxLength={30} style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userName: text
                        })} underlineColorAndroid="transparent"></TextInput>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                                let data = { "FUserName": this.state.userName, "FAction": "APP", "FVersion": "1.0.0", "FPassword": md5.hex_md5(this.state.userPwd) }
                                login(data)
                            }}
                            style={{ marginTop: 30, justifyContent: 'center', width: screenW - 56, height: 46, borderRadius: 5, backgroundColor: '#387BE6', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: 'white' }}>登录</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent:'center', flexDirection: 'row', marginTop: 30,marginBottom: 30 }}>
                            <Text style={{ color: '#929FAD', fontSize: 12 }}>登录注册表示阅读并同意本平台</Text>
                            <Text style={{ color: '#387BE6', fontSize: 12, marginLeft: 3 }}>【会员注册协议】</Text>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaViewPlus>
        )
    }
}

const styles =StyleSheet.create({
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
})
