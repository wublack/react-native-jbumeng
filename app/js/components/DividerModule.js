import React from 'react'
import {
    View,
    Text,
} from 'react-native';
import ColorUtils from '../utils/ColorUtils';
import { screenW } from '../utils/ScreenUtil';

export default class DividerModule extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('sdsd')
        return (
            <View style={{ height: 1, width: screenW, backgroundColor: ColorUtils.divider_color }}></View>
        )
    }
}