import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import CommonStyle from '../utils/CommonStyle'

export default class FinancingBean extends React.Component {
    _onPress = () => {
        this.props.onPressItem('1');
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.financingCell}>
                    <Image style={styles.financingCellIcon} />
                    <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={CommonStyle.cellTitle}>中国人寿</Text>
                            <Text style={CommonStyle.cellFlag}>保险服务</Text>
                        </View>
                        <View>
                            <Text style={CommonStyle.cellDesc}>中国第一汽车集团有限公司，前身为第一汽车制造厂</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
                            <Text style={CommonStyle.cellTitle}>融资类型：Pre-A轮</Text>
                            <View style={{ width: 1, height: 12, backgroundColor: '#E5E5E5' }}></View>
                            <Text style={CommonStyle.cellTitle}>￥6800万</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
    financingCell: {
        flexDirection: 'row',
        padding: 15,
        height: 125
    },
    financingCellIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#DFEAFC',
    }
})