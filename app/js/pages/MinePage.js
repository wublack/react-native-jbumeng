import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default class MinePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>sdfsdf</Text>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ height: 100, width: 300 }}>
                    <Text>dfasd</Text>
                </LinearGradient>
            </View>
        )
    }

}