import React from 'react'
import {
    View,
    Text
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";

/**
 * 筛选页面
 */
export  default  class  CategoryPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <SafeAreaViewPlus>
                <NavigationBar style={{backgroundColor:'white'}}/>
                <Text>筛选页面</Text>
            </SafeAreaViewPlus>
        )
    }

}
