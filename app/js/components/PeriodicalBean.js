import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import CommonStyle from '../utils/CommonStyle'

export default class PeriodicalBean extends React.Component {
    _onPress = () => {
        this.props.onPressItem('1');
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.periodicalCell}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={CommonStyle.cellTitle}>中国人寿</Text>
                        <Text style={CommonStyle.cellFlag}>保险服务</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 20 }}>
                            <Text>4.100%</Text>
                            <Text>七日年化收益率</Text>
                        </View>
                        <View style={{ width: 1, height: 44, backgroundColor: '#E5E5E5', marginTop: 20 }}></View>
                        <View style={{ marginTop: 20 }}>
                            <Text>35 天</Text>
                            <Text>1000 元起</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
    periodicalCell: {
        height: 123,
        padding: 15
    },
})