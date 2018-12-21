import ColorUtils from "./ColorUtils";

export default {
    centerStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontalCenterStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontalBetweenStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    blackTextStyle: {
        fontSize: 14,
        color: ColorUtils.default_black_color
    },
    grayTextStyle: {
        fontSize: 14,
        color: ColorUtils.default_gray_color
    },
    smallGrayTextStyle: {
        fontSize: 12,
        color: ColorUtils.default_gray_color
    },
    blueTextStyle: {
        fontSize: 12,
        color: ColorUtils.default_backcolor
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
    }
}
