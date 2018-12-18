import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import { screenW } from "../utils/ScreenUtil";
import NavigationBar from '../components/NavigationBar';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

class SectionTitle extends React.Component {
    render() {
        return (
            <View style={{height: 50, paddingLeft: 15, paddingTop: 20}}>
                <Text style={{fontSize:16,color:'#121C33',fontWeight:'bold'}}>{this.props.title}</Text>
            </View>
        );
    }
}
class FinancingBean extends React.Component {
    constructor() {
        super();
        this.state={
            list : ['','','','']
        };
    }
    render() {
        let list = this.state.list.map((itme)=>{
            return (
                <View style={styles.financingCell}>
                    <Image style={styles.financingCellIcon} />
                    <View style={{marginLeft:10,justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.cellTitle}>中国人寿</Text>
                            <Text style={styles.cellFlag}>保险服务</Text>
                        </View>
                        <View>
                            <Text style={styles.cellDesc}>中国第一汽车集团有限公司，前身为第一汽车制造厂</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
                            <Text style={styles.cellTitle}>融资类型：Pre-A轮</Text>
                            <View style={{width:1,height:12,backgroundColor:'#E5E5E5'}}></View>
                            <Text style={styles.cellTitle}>￥6800万</Text>
                        </View>
                    </View>
                </View>
            );
        });
        return list;
    }
}
class PeriodicalBean extends React.Component {
    constructor() {
        super();
        this.state={
            list : ['','','']
        };
    }
    render() {
        let list = this.state.list.map((item)=>{
            return (
                <View style={styles.periodicalCell}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.cellTitle}>中国人寿</Text>
                        <Text style={styles.cellFlag}>保险服务</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:20}}>
                            <Text>4.100%</Text>
                            <Text>七日年化收益率</Text>
                        </View>
                        <View style={{width:1,height:44,backgroundColor:'#E5E5E5',marginTop:20}}></View>
                        <View style={{marginTop:20}}>
                            <Text>35 天</Text>
                            <Text>1000 元起</Text>
                        </View>
                    </View>
                </View>
            );
        });
        return list;
    }
}
class InsuranceBean extends React.Component {
    constructor() {
        super();
        this.state={
            list : ['','','','']
        };
    }
    render() {
        let list = this.state.list.map((itme)=>{
            return (
                <View style={styles.insuranceCell}>
                    <Image style={styles.insuranceCellIcon} />
                    <View style={{marginLeft:10}}>
                        <View style={{marginBottom:10}}>
                            <Text style={styles.cellTitle}>住院医疗保险</Text>
                        </View>
                        <View>
                            <Text style={styles.cellDesc}>11元/月起，600万保额，报销医疗费</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text>￥13 元起</Text>
                        </View>
                    </View>
                </View>
            );
        });
        return list;
    }
}
class ShowMoreBean extends React.Component {
    render() {
        return (
            <View style={{height: 57,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:12,color:'#387BE6'}}>查看更多</Text>
            </View>
        );
    }
}
class SecondShowMoreBean extends React.Component {
    render() {
        return (
            <View>
                <View style={{height:40,flexDirection: 'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,paddingTop:15}}>
                    <Text style={styles.cellTitle}>{this.props.title}</Text>
                    <Text style={{fontSize:12,color:'#929FAD'}}>查看更多》</Text>
                </View>
                <View style={{width:width-30,height:1,backgroundColor:'#E5E5E5',marginLeft:15}}></View>
            </View>
        );
    }
}
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar></NavigationBar>
                <ScrollView>
                    <Swiper style={styles.bannerSwiper} height={200} autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor: '#E1E3F8', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: '#387BE6', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                            bottom: 0
                        }}
                        loop>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg'}} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg'}} />
                        </View>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://seopic.699pic.com/photo/50035/0520.jpg_wh1200.jpg'}} />
                        </View>
                    </Swiper>

                    <View style={styles.massege}>
                        <Text style={{ fontSize: 14 }}>消息</Text>
                        <Text style={{ paddingLeft: 10, fontSize: 12 }}>外国友人融资布局中国市场，致富机会无处不...</Text>
                    </View>

                    <Swiper style={styles.itemSwiper} height={170} autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor: '#E1E3F8', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: '#387BE6', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                            bottom: 0
                        }}
                        loop>
                        <View style={styles.swiperContainer}>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} />
                                <Text style={styles.itemTitle}>业务对接</Text>
                            </View>
                        </View>
                    </Swiper>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.financingSection}>
                        <SectionTitle title='精选融资项目'></SectionTitle>
                        <FinancingBean></FinancingBean>
                        <ShowMoreBean></ShowMoreBean>
                    </View>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.financialManagementSection}>
                        <SectionTitle title='精选理财项目'></SectionTitle>
                        <SecondShowMoreBean title='活期类'></SecondShowMoreBean>
                        
                        <SecondShowMoreBean title='定期类'></SecondShowMoreBean>
                        <PeriodicalBean></PeriodicalBean>
                        <View style={{height:20}}></View>
                    </View>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.insuranceSection}>
                        <SectionTitle title='精选保险项目'></SectionTitle>
                        <InsuranceBean></InsuranceBean>
                        <ShowMoreBean></ShowMoreBean>
                    </View>

                    <View style={{height: 115,backgroundColor:'#F9F9FA'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:30,paddingRight:30,paddingTop:20}}>
                            <Text>关于家办</Text>
                            <View style={{width:1,height:10,backgroundColor:'#E5E5E5'}}></View>
                            <Text>客户服务</Text>
                            <View style={{width:1,height:10,backgroundColor:'#E5E5E5'}}></View>
                            <Text>查找业务</Text>
                            <View style={{width:1,height:10,backgroundColor:'#E5E5E5'}}></View>
                            <Text>企业入驻</Text>
                        </View>
                        <View style={{alignSelf:'center',paddingTop:20}}>
                            <Text>Copyright © 2018-2018 家办联盟 版权所有</Text>
                        </View>
                        <View style={{alignSelf:'center',paddingTop:10}}>
                            <Text>京ICP备123456789号,由 junnet.net 提供技术服务</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },

    sectionSep: {
        height: 10,
        backgroundColor: '#FAFAFA'
    },
    cellTitle: {
        fontSize:14,
        color:'#121C33'
    },
    cellFlag: {
        fontSize:10,
        color:'#387BE6',
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

    bannerSwiper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        backgroundColor: 'yellow',
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 6
    },
  
    massege: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10, 
        margin: 15, 
        backgroundColor: '#F8F8F8',
        borderRadius: 2
    },

    itemSwiper: {
    },
    swiperContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemContainer: {
        width: (width-30)*0.2,
        height: 85,
        alignItems: 'center'
    },
    itemImage: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: '#DFEAFC',
        marginTop: 10
    },
    itemTitle: {
        marginTop: 10,
        fontSize: 12
    },

    financingSection: {

    },
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

    financialManagementSection: {

    },
    periodicalCell: {
        height: 123,
        padding: 15
    },

    insuranceSection: {

    },
    insuranceCell: {
        flexDirection: 'row',
        padding: 15,
        height: 120,
        alignItems: 'center'
    },
    insuranceCellIcon: {
        width: 108,
        height: 80,
        backgroundColor: '#DFEAFC',
    }
})
