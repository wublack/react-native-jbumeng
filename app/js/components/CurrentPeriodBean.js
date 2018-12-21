import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import CommonStyle from '../utils/CommonStyle'

export default class CurrentPeriodBean extends React.Component {
    _onPress = () => {
        this.props.onPressItem('1');
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={[styles.currentPeriodCell,styles.shadowStyle]}>
                    <Text style={[CommonStyle.cellTitle,{paddingTop:20}]}>百信智慧存</Text>
                    <Text style={{paddingTop:13}}>4.100%</Text>
                    <Text style={[CommonStyle.cellDesc,{paddingTop:5}]}>今日支取收益率</Text>
                    <View style={{flexDirection:'row',paddingTop:10}}>
                        <Text style={[CommonStyle.cellFlag,{marginLeft:0}]}>可续投</Text>
                        <Text style={CommonStyle.cellFlag}>T+1到账收益高</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
    currentPeriodCell: {
        padding: 5,
        height: 145,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        alignItems:'center',
        backgroundColor:'white'
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 10, 
        elevation: 10 
    }
})