import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>QQ登录</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>微信登录</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>QQ分享</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>微信好友分享</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>微信朋友圈分享</Text>
                </TouchableOpacity>
            </View>
        )
    }

}