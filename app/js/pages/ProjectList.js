import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList, Image
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";
import FontIcon from '../components/FontIcon'
import DividerModule from '../components/DividerModule'
import FinancingModule from '../components/FinancingModule'
import ColorUtils from '../utils/ColorUtils';

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)
    }
    _keyExtractor = (item, index) => index;

    render() {
        let rightButton = <TouchableOpacity
            onPress={() => {
                this.props.navigation.openDrawer();
            }}>
            <FontIcon fontStyle={{ fontSize: 18, color: ColorUtils.default_gray_color, marginRight: 15, }} fontSource='icon-Repair'></FontIcon>
        </TouchableOpacity>
        return (
            <SafeAreaViewPlus
                bottomInset={false}
                bottomColor={'white'}
                topColor={'white'}
                style={{ backgroundColor: 'white' }}>
                <NavigationBar title='投资融资项目' style={{ backgroundColor: 'white' }} rightButton={rightButton} />
                <DividerModule />
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    ItemSeparatorComponent={DividerModule}
                    renderItem={(item) => <FinancingModule />}
                />
            </SafeAreaViewPlus>
        )
    }

}
