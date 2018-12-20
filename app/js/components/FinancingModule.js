import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class FinancingModule extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['', '', '', '']
        };
    }
    render() {
        return (
            <View style={styles.financingCell}>
                <Image style={styles.financingCellIcon} />
                <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.cellTitle}>中国人寿</Text>
                        <Text style={styles.cellFlag}>保险服务</Text>
                    </View>
                    <View>
                        <Text style={styles.cellDesc}>中国第一汽车集团有限公司，前身为第一汽车制造厂</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
                        <Text style={styles.cellTitle}>融资类型：Pre-A轮</Text>
                        <View style={{ width: 1, height: 12, backgroundColor: '#E5E5E5' }}></View>
                        <Text style={styles.cellTitle}>￥6800万</Text>
                    </View>
                </View>
            </View>
        )
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
    },
    cellTitle: {
        fontSize: 14,
        color: '#121C33'
    },
    cellFlag: {
        fontSize: 10,
        color: '#387BE6',
        backgroundColor: '#DFEAFC',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 10
    },
    cellDesc: {
        fontSize: 12,
        color: '#929FAD'
    },
    financialManagementSection: {

    },
    periodicalCell: {
        height: 123,
        padding: 15
    },
})