import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Navig
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { screenW } from "../utils/ScreenUtil";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
        return (<TouchableOpacity
            key={`${name}_${page}`}
            activeOpacity={0.7}
            onPress={() => onPressHandler(page)}
            onLayout={onLayoutHandler}
            style={{ width: 100, }}
            underlayColor="#fff"
        >
            <Text style={{ color: '#333333', fontSize: 18 }}>{name}</Text>
        </TouchableOpacity>)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollableTabView
                    initialPage={0}
                    style={{ backgroundColor: 'white', flex: 1, borderWidth: 0, borderColor: '#fff' }}
                    tabBarUnderlineStyle={{ height: 0, color: '#fff', borderBottomWidth: 0 }}
                    renderTabBar={() =>
                        <DefaultTabBar
                            style={{ borderWidth: 0, borderColor: '#fff', width: 200 }}
                            renderTab={this.renderTab} />}>
                    <Text {...this.props} style={{ width: screenW }} tabLabel="告警" >高级</Text>
                    <Text {...this.props} style={{ width: screenW }} tabLabel="通知" >通知</Text>
                </ScrollableTabView>
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
