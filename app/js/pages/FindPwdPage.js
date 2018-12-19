import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import SafeAreaViewPlus from '../components/SafeAreaViewPlus';
import NavigationBar from '../components/NavigationBar';
import ColorUtils from '../utils/ColorUtils'
import { screenW } from '../utils/ScreenUtil';

export default class FindPwdPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }

    render() {
        return (
            <SafeAreaViewPlus style={{ backgroundColor: 'white' }}>
                <NavigationBar style={{ backgroundColor: 'white' }} title={'找回密码'} />
                <View style={{ alignItems: 'center' }}>
                    <TextInput placeholder={'手机号码'} autoCapitalize={'none'} value={this.state.userName} maxLength={30}
                        style={styles.inputStyle} onChangeText={(text) => this.setState({
                            userName: text
                        })} underlineColorAndroid="transparent"></TextInput>
                    <View style={{ height: 1, width: screenW - 70, backgroundColor: ColorUtils.divider_color, }}></View>
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
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            this.props.navigation.push('RegisterPage')
                        }}
                        style={{ marginTop: 30, justifyContent: 'center', width: screenW - 56, height: 46, borderRadius: 5, backgroundColor: ColorUtils.default_backcolor, alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: 'white' }}>下一步</Text>
                    </TouchableOpacity>
                </View>
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