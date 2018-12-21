import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import CommonStyle from '../utils/CommonStyle'

export default class InsuranceBean extends React.Component {
    _onPress = () => {
        this.props.onPressItem('1');
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.insuranceCell}>
                    <Image style={styles.insuranceCellIcon} />
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={CommonStyle.cellTitle}>住院医疗保险</Text>
                        </View>
                        <View>
                            <Text style={CommonStyle.cellDesc}>11元/月起，600万保额，报销医疗费</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text>￥13 元起</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
    insuranceCell: {
        flexDirection: 'row',
        padding: 15,
        height: 120,
        alignItems: 'center'
    },
    insuranceCellIcon: {
        width: 108,
        height: 80,
        backgroundColor: '#DFEAFC',
    }
})