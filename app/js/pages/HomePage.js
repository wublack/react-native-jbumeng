import React from 'react'
import {View,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {screenW} from "../utils/ScreenUtil";

export  default  class HomePage extends  React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>子页面</Text>
                <Text>sdfasf</Text>
                <LinearGradient colors={["#57AFFF","#2A63BF","#042289"]} style={{flex:1,height:300,widget: screenW}}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Gill Sans',
                        textAlign: 'center',
                        margin: 10,
                        color: '#ffffff',
                        backgroundColor: 'transparent',
                    }}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
            </View>
        )
    }
}
