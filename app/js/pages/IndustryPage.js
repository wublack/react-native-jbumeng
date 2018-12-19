import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import SafeAreaViewPlus from '../components/SafeAreaViewPlus';
import NavigationBar from '../components/NavigationBar';
import { screenH, screenW } from '../utils/ScreenUtil';
import GridView from 'react-native-super-grid'

export default class IndustryPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rightButton = <View style={{ marginRight: 15 }}>
            <Text style={{ color: "#929FAD", fontSize: 16 }}>已有账号</Text>
        </View>
        return (
            <SafeAreaViewPlus
                bottomInset={false}
                bottomColor={'#F8F8F8'}
                topColor={'#F8F8F8'} >
                <NavigationBar statusBar={{ hidden: false, barStyle: 'dark-content', translucent: false }} style={{ backgroundColor: '#F8F8F8' }} rightButton={rightButton} />
                <ScrollView style={{ backgroundColor: '#F8F8F8' }}>
                    <Text style={{ marginLeft: 15, fontSize: 18, color: '#121C33', marginTop: 10, marginBottom: 10 }}>hi，初次见面</Text>
                    <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={{ color: '#929FAD', fontSize: 12 }}>选择你所属的行业和关注的领域</Text>
                        <Text style={{ color: '#929FAD', fontSize: 12 }}>+自定义标签</Text>
                    </View>
                    <GridView
                        itemDimension={screenW / 3}
                        items={[1, 2, 3, 4, 5, 6]}
                        renderItem={item => (<View style={{ justifyContent: 'center' }}>
                            <Image style={{
                                width: 165, height: 120, backgroundColor: "red", borderRadius: 10
                            }}></Image>
                            <Text style={{ alignSelf: 'center', position: 'absolute' }}> {item} </Text></View>)}
                    />
                </ScrollView>
            </SafeAreaViewPlus>
        )
    }
}