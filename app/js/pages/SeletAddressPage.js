import React from 'react'
import {
    View,
    Text,
    Platform,
    FlatList,
    PermissionsAndroid
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";
import CommonStyle from "../utils/CommonStyle";
import SplashScreen from "react-native-splash-screen";
import Geolocation from 'Geolocation'
import FetchUtils from "../utils/FetchUtils";

class AddressHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result: null
        }
    }

    render(){
        return(
            <View style={[CommonStyle.horizontalCenterStyle,{marginLeft:15,marginRight:15}]}>
                <View>
                    <Text>{this.state.result ? this.state.result.addressComponent.city : ''}</Text>
                </View>
                <Text style={[CommonStyle.blueTextStyle]}>重新定位</Text>
            </View>
        )
    }

    componentDidMount(){
        if (Platform.OS === 'android') {
            this.requestCameraPermission()
        } else {
            this.getLocation()
        }
    }

    getLocation() {
        Geolocation.getCurrentPosition(
            location => {
                let longitude = location.coords.longitude
                let latitude = location.coords.latitude
                let BaiduMap_URL = 'https://api.map.baidu.com/geocoder/v2/?output=json&ak=I3vhU9WcEANK1T81i2LiPVgOKeepeHFW&location='
                // alert('https://api.map.baidu.com/geocoder/v2/?output=json&ak=I3vhU9WcEANK1T81i2LiPVgOKeepeHFW&location=' + location.coords.latitude + ',' + location.coords.longitude);
                new FetchUtils().getFetchData(BaiduMap_URL + latitude + ',' + longitude)
                    .then(result => {
                        if (result.status === 0) {
                            this.setState({
                                result: result.result
                            })
                        }
                    }).catch(err => {
                    alert('err')
                    console.log(JSON.stringify(err))
                })
            }, error => {
                alert('获取位置失败')
            }
        )
    }

    async  requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Cool Photo App Camera Permission',
                    'message': 'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the ACCESS_FINE_LOCATION")
                this.getLocation()
            } else {
                console.log("Camera permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }
}

export  default  class SeletAddressPage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    render(){
        return(
            <SafeAreaViewPlus>
                <NavigationBar style={{backgroundColor:'white'}} title={'选择所在地址'}/>
                <AddressHeader />
                <Text style={[CommonStyle.smallGrayTextStyle,{marginLeft:15}]}>热门城市</Text>
                <FlatList
                    data={['深圳','广州','北京','上海']}
                    renderItem={(item)=>{
                        return(
                            <Text style={[CommonStyle.blackTextStyle]}>{item.item}</Text>
                        )
                    }}
                />
            </SafeAreaViewPlus>
        )
    }

}
