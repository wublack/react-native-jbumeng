import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    DeviceInfo
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";
import CommonStyle from '../utils/CommonStyle';
import FlowLayout from '../components/FlowLayout';
import ColorUtils from '../utils/ColorUtils';
import { screenW } from '../utils/ScreenUtil';

/**
 * 筛选页面
 */
export default class CategoryPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let leftButton = <TouchableOpacity>
            <Text style={[CommonStyle.grayTextStyle]}>行业</Text>
        </TouchableOpacity>
        return (
            <SafeAreaViewPlus
                bottomInset={false}
                bottomColor={'transparent'}
                topColor={'white'} >
                <ScrollView>
                    <View style={{ paddingLeft: 20, paddingRight: 20, }}>
                        <NavigationBar leftButton={leftButton} style={{ backgroundColor: 'white' }} />
                        <FlowLayout backgroundColors={[ColorUtils.color_f8f8f8, '#387BE6']} ref="flow" multiselect={true} dataValue={["全部", "机器人", "企业服务", "化工", "云服务", "硬件", "环保", "人工智能",]} />
                    </View>
                    <View style={{ height: 10, backgroundColor: ColorUtils.color_FAFAFA, width: screenW, marginTop: 20 }}></View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, }}>
                        <NavigationBar leftButton={leftButton} style={{ backgroundColor: 'white' }} />
                        <FlowLayout backgroundColors={[ColorUtils.color_f8f8f8, '#387BE6']} ref="flow" multiselect={true} dataValue={["全部", "机器人", "企业服务", "化工", "云服务", "硬件", "环保", "人工智能",]} />
                    </View>
                    <View style={{ height: 10, backgroundColor: ColorUtils.color_FAFAFA, width: screenW, marginTop: 20 }}></View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, }}>
                        <NavigationBar leftButton={leftButton} style={{ backgroundColor: 'white' }} />
                        <FlowLayout backgroundColors={[ColorUtils.color_f8f8f8, '#387BE6']} ref="flow" multiselect={true} dataValue={["全部", "机器人", "企业服务", "化工", "云服务", "硬件", "环保", "人工智能",]} />
                    </View>
                </ScrollView>
                <View style={[CommonStyle.horizontalCenterStyle, { height: 49, width: screenW - 45, position: 'absolute', bottom: DeviceInfo.isIPhoneX_deprecated ? 30 : 0 }]}>
                    <TouchableOpacity
                        style={{
                            flex: 1, height: 49, backgroundColor: ColorUtils.color_f8f8f8,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ color: ColorUtils.default_black_color, textAlign: 'center', fontSize: 14 }}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1, height: 49, backgroundColor: ColorUtils.default_backcolor,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>确认</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaViewPlus>
        )
    }

}
