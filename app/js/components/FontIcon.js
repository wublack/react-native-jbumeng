import React from 'react'
import { View, Text, StyleSheet, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import icon from "../utils/newiconfont";

export default class FontIcon extends React.Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        ...ViewPropTypes,
        // fontStyle: PropTypes.style,
        fontSource: PropTypes.string
    }

    getIconTxt(iconTxt) {
        if (iconTxt && iconTxt.length > 5 && iconTxt.search('icon-') !== -1) {
            return iconTxt.replace('icon-', '')
        }
        return iconTxt
    }

    render() {
        return (
            <Text style={[styles.iconStyle, this.props.fontStyle]}>{icon(this.getIconTxt(this.props.fontSource))}</Text>
        )
    }

}

const styles = StyleSheet.create({
    iconStyle: {
        fontFamily: 'iconfont',
    }
})

