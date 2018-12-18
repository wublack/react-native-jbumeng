import React from 'react'
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import SafeAreaViewPlus from '../components/SafeAreaViewPlus';
import NavigationBar from '../components/NavigationBar';
import { screenH, screenW } from '../utils/ScreenUtil';
import FlowLayout from '../components/FlowLayout'

export default class SelectLabelPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rightButton = <View style={{ marginRight: 15 }}>
            <Text style={{ color: "#929FAD", fontSize: 16 }}>已有账号</Text>
        </View>
        return (
            <SafeAreaViewPlus >
                <NavigationBar style={{ backgroundColor: '#F8F8F8' }} rightButton={rightButton} />
                <ScrollView style={{ backgroundColor: '#F8F8F8' }}>
                    <Text style={{ marginLeft: 15, fontSize: 18, color: '#121C33', marginTop: 10, marginBottom: 10 }}>hi，初次见面</Text>
                    <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={{ color: '#929FAD', fontSize: 12 }}>选择你所属的行业和关注的领域</Text>
                        <Text style={{ color: '#929FAD', fontSize: 12 }}>+自定义标签</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            style={{
                                flex: 1, minHeight: screenH - 100,
                            }}
                            data={['设计', '技术', '产品']}
                            renderItem={(item) => {
                                return (
                                    <TouchableOpacity style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#121C33', fontSize: 14 }}>{item.item}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <View style={{ backgroundColor: 'white', flex: 4, paddingLeft: 11, paddingRight: 11, paddingTop: 40 }}>
                            <FlowLayout backgroundColors={['#fff', '#387BE6']} ref="flow" multiselect={true} dataValue={["标签1", "标签2", "标签3标签4标签4", "标签4", "标签5", "标签5标签6", "标签7", "标签8", "标签9", "标签10标签8"]} />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {

                    }}
                    style={{
                        marginTop: 30, justifyContent: 'center',
                        width: screenW - 56, height: 46, borderRadius: 5,
                        backgroundColor: '#387BE6', alignItems: 'center',
                        alignSelf: 'center',
                        position: 'absolute', bottom: 20
                    }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>选好了</Text>
                </TouchableOpacity>
            </SafeAreaViewPlus>
        )
    }

}