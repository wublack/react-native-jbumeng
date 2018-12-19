import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Geolocation from 'Geolocation'

export default class MinePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //获取经纬度的方法  Longitude  Latitude
    getLongitudeAndLatitude = () => {

        //获取位置再得到城市先后顺序，通过Promise完成
        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition(
                location => {

                    //可以获取到的数据
                    var result = "速度：" + location.coords.speed +
                        "\n经度：" + location.coords.longitude +
                        "\n纬度：" + location.coords.latitude +
                        "\n准确度：" + location.coords.accuracy +
                        "\n行进方向：" + location.coords.heading +
                        "\n海拔：" + location.coords.altitude +
                        "\n海拔准确度：" + location.coords.altitudeAccuracy +
                        "\n时间戳：" + location.timestamp;

                    // ToastAndroid.show("UTIl" + location.coords.longitude, ToastAndroid.SHORT);

                    resolve([location.coords.longitude, location.coords.latitude]);
                },
                error => {
                    // Alert.alert("获取位置失败：" + error, "")
                    reject(error);
                }
            );
        })
    }

    componentWillMount(){
        console.log('sdfsdf__-----___')
        this.getLongitudeAndLatitude().then((result)=>{
            console.log('result',result)
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>sdfsdf</Text>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ height: 100, width: 300 }}>
                    <Text>dfasd</Text>
                </LinearGradient>
            </View>
        )
    }

}
