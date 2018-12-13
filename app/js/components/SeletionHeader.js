import React from 'react'
import { View, Text, Image, StyleSheet, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

export default class SeletionHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        containerBgc: ViewPropTypes.style,
        leftBgSource: PropTypes.object,
        seletionTitle: PropTypes.string,
        leftTitleStyle: ViewPropTypes.style,
        leftImgStyle: ViewPropTypes.style,
        rightImgStyle: ViewPropTypes.style,
        rightBgSource: PropTypes.object,
        rightComponent: PropTypes.element,
        leftTotalNum: PropTypes.number,
        leftComponent: PropTypes.element,
        ...View.propTypes
    }

    render() {
        //右边是否有自定义控件
        let rightCpm = this.props.rightComponent ? this.props.rightComponent :
            <Image style={this.props.rightImgStyle ? this.props.rightImgStyle : styles.defRightImg} source={this.props.rightBgSource ? this.props.rightBgSource : null}></Image>
        //左边数字展示
        let numCpm = this.props.leftTotalNum ? <Text style={styles.defLeftNumTxt}>({this.props.leftTotalNum})</Text> : null
        let leftCpm = this.props.leftComponent ? this.props.leftComponent :
            <Image style={[styles.defLeftImg, this.props.leftImgStyle]} source={this.props.leftBgSource ? this.props.leftBgSource : null}></Image>
        return (
            <View style={[styles.defContainer, this.props.containerBgc]}>
                <View style={styles.defLeftStyle}>
                    {leftCpm}
                    <Text style={[this.props.leftTitleStyle ? this.props.leftTitleStyle : {}, styles.defLeftText]}>{this.props.seletionTitle}</Text>
                    {numCpm}
                </View>
                {rightCpm}
            </View>
        )
    }



}
const styles = StyleSheet.create({
    defContainer: {
        height: 38,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#0EAFF8'
    },
    defLeftStyle: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    defLeftImg: {
        marginLeft: 13,
        alignSelf: 'center'
    },
    defLeftText: {
        color: 'white',
        fontSize: 21,
    },
    defRightImg: {
        alignSelf: 'center',
        marginRight: 10
    },
    defLeftNumTxt: {
        fontSize: 10,
        color: 'white',
        alignSelf: 'flex-end',
        marginBottom: 5,
        marginLeft: 2
    }
})