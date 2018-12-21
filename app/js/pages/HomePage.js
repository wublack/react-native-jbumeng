import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image,
    RefreshControl,
    FlatList,
} from 'react-native';
import CommonStyle from '../utils/CommonStyle'
import NavigationBar from '../components/NavigationBar';
import LinearGradient from 'react-native-linear-gradient';
import FinancingBean from '../components/FinancingBean';
import CurrentPeriodBean from '../components/CurrentPeriodBean';
import PeriodicalBean from '../components/PeriodicalBean';
import InsuranceBean from '../components/InsuranceBean';
import Swiper from 'react-native-swiper';
import GridView from 'react-native-super-grid';
const { width, height } = Dimensions.get('window');

class SectionTitle extends React.Component {
    render() {
        return (
            <View style={{ height: 50, paddingLeft: 15, paddingTop: 20 }}>
                <Text style={{ fontSize: 16, color: '#121C33', fontWeight: 'bold' }}>{this.props.title}</Text>
            </View>
        );
    }
}
class ItemDivideComponent extends React.Component {
    render() {
      return (
        <View style={{height: 1, backgroundColor: '#E5E5E5',marginLeft:15,marginRight:15}}/>
      );
    }
  };

  class FinancingBeanList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['', '', '', '']
        };
    }
    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          let list = ['', '', '', '', '', '']
          return {list:list};
        });
      };
    render() {
        return (
            <FlatList
                data={this.state.list}
                ItemSeparatorComponent={ItemDivideComponent}
                ListFooterComponent={<View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>}
                renderItem={({item}) => (
                    <FinancingBean
                        onPressItem={this._onPressItem}
                    ></FinancingBean>)}
            />
        )
    }
}
class CurrentPeriodBeanList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['', '', '']
        };
    }
    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          let list = ['', '', '', '', '', '']
          return {list:list};
        });
      };
    render() {
        return (
            <FlatList
                style={{height:195}}
                horizontal={true}
                data={this.state.list}
                renderItem={({item}) => (
                    <CurrentPeriodBean
                        onPressItem={this._onPressItem}
                    ></CurrentPeriodBean>
                )}
            />
        )
    }
}
class PeriodicalBeanList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['', '', '']
        };
    }
    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          let list = ['', '', '', '', '', '']
          return {list:list};
        });
      };
    render() {
        return (
            <FlatList
                data={this.state.list}
                ItemSeparatorComponent={ItemDivideComponent}
                ListFooterComponent={<View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>}
                renderItem={({item}) => (
                    <PeriodicalBean
                        onPressItem={this._onPressItem}
                    ></PeriodicalBean>
                )}
            />
        )
    }
}
class InsuranceBeanList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['', '', '', '']
        };
    }
    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          let list = ['', '', '', '', '', '']
          return {list:list};
        });
      };
    render() {
        return (
            <FlatList
                data={this.state.list}
                ItemSeparatorComponent={ItemDivideComponent}
                ListFooterComponent={<View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>}
                renderItem={({item}) => (
                    <InsuranceBean
                        onPressItem={this._onPressItem}
                    ></InsuranceBean>
                )}
            />
        )
    }
}
class ShowMoreBean extends React.Component {
    render() {
        return (
            <View style={{ height: 57, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: '#387BE6' }}>查看更多</Text>
            </View>
        );
    }
}
class SecondShowMoreBean extends React.Component {
    render() {
        return (
            <View>
                <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
                    <Text style={styles.cellTitle}>{this.props.title}</Text>
                    <Text style={{ fontSize: 12, color: '#929FAD' }}>查看更多》</Text>
                </View>
                <View style={{ width: width - 30, height: 1, backgroundColor: '#E5E5E5', marginLeft: 15 }}></View>
            </View>
        );
    }
}
class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressLink}>
                <Text style={{fontSize:12,color:'#666666'}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
        }
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写
    
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.timer = setTimeout(() => {
            this.setState({refreshing: false});
        }, 1000);
    }

    render() {
        let leftButton = <View style={{ flexDirection: 'row' }}>
            <Text>深圳</Text><Image />
        </View>
        let rightButton = <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#7C58A6','#387BE6']} style={{justifyContent: 'center',alignItems:'center',width:90,height:32,borderRadius:16,marginRight:15}}>
                <Text style={{fontSize:12,color:'#FFFFFF'}}>发布项目</Text>
            </LinearGradient>
        </TouchableOpacity>
        const items = [
            {title:'业务对接',url:''},
            {title:'论坛活动',url:''},
            {title:'专业资讯',url:''},
            {title:'名家大V',url:''},
            {title:'公司企业',url:''},
            {title:'社团组织',url:''},
            {title:'事业单位',url:''},
            {title:'党政工团',url:''}
        ];
        return (
            <View style={styles.container}>
                <NavigationBar statusBar={{ hidden: false, barStyle: 'dark-content', translucent: false }} leftButton={leftButton} rightButton={rightButton} style={{ backgroundColor: 'white' }}></NavigationBar>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}></RefreshControl>
                    }>
                    <Swiper style={styles.bannerSwiper} height={200} autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{ backgroundColor: '#E1E3F8', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                        activeDot={<View style={{ backgroundColor: '#387BE6', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        paginationStyle={{
                            bottom: 0
                        }}
                        loop>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={{ uri: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' }} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={{ uri: 'http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg' }} />
                        </View>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={{ uri: 'http://seopic.699pic.com/photo/50035/0520.jpg_wh1200.jpg' }} />
                        </View>
                    </Swiper>

                    <View style={styles.massege}>
                        <Text style={{ fontSize: 14 }}>消息</Text>
                        <Text style={{ paddingLeft: 10, fontSize: 12 }}>外国友人融资布局中国市场，致富机会无处不...</Text>
                    </View>

                    <Swiper style={styles.itemSwiper} height={170} autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{ backgroundColor: '#E1E3F8', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                        activeDot={<View style={{ backgroundColor: '#387BE6', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        paginationStyle={{
                            bottom: 0
                        }}
                        loop>
                        <GridView 
                            itemDimension={(width - 30) * 0.2}
                            spacing={0}
                            items={items}
                            style={styles.swiperContainer}
                            renderItem={item => (
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProjectList')}}>
                                    <View style={styles.itemContainer}>
                                        <Image style={styles.itemImage} />
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </Swiper>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.financingSection}>
                        <SectionTitle title='精选融资项目'></SectionTitle>
                        <FinancingBeanList></FinancingBeanList>
                        <ShowMoreBean></ShowMoreBean>
                    </View>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.financialManagementSection}>
                        <SectionTitle title='精选理财项目'></SectionTitle>
                        <SecondShowMoreBean title='活期类'></SecondShowMoreBean>
                        <CurrentPeriodBeanList></CurrentPeriodBeanList>

                        <SecondShowMoreBean title='定期类'></SecondShowMoreBean>
                        <PeriodicalBeanList></PeriodicalBeanList>
                        <View style={{ height: 20 }}></View>
                    </View>
                    <View style={styles.sectionSep}></View>

                    <View style={styles.insuranceSection}>
                        <SectionTitle title='精选保险项目'></SectionTitle>
                        <InsuranceBeanList></InsuranceBeanList>
                        <ShowMoreBean></ShowMoreBean>
                    </View>

                    <View style={{ height: 115, backgroundColor: '#F9F9FA' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
                            <LinkButton title='关于家办' onPressLink={()=>{console.log('关于家办')}}/>
                            <View style={{ width: 1, height: 10, backgroundColor: '#E5E5E5' }}></View>
                            <LinkButton title='客户服务' onPressLink={()=>{console.log('关于家办')}}/>
                            <View style={{ width: 1, height: 10, backgroundColor: '#E5E5E5' }}></View>
                            <LinkButton title='查找业务' onPressLink={()=>{console.log('关于家办')}}/>
                            <View style={{ width: 1, height: 10, backgroundColor: '#E5E5E5' }}></View>
                            <LinkButton title='企业入驻' onPressLink={()=>{console.log('关于家办')}}/>
                        </View>
                        <View style={{ alignSelf: 'center', paddingTop: 20 }}>
                            <Text style={{fontSize:10,color:'#999999'}}>Copyright © 2018-2018 家办联盟 版权所有</Text>
                        </View>
                        <View style={{ alignSelf: 'center', paddingTop: 10 }}>
                            <Text style={{fontSize:10,color:'#999999'}}>京ICP备123456789号,由 junnet.net 提供技术服务</Text>
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
        marginLeft:15,
        marginRight:15,
        flex: 1
    },
    itemContainer: {
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
    

    insuranceSection: {

    },
    
})
