import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { screenW } from "../utils/ScreenUtil";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const bottomColor = `rgba(0, 0, 0, ${0})`
        const maskColor = `rgba(0, 0, 0, ${0.5})`
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>sdfsd</Text>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 0.75]} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        height: 64,
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})
