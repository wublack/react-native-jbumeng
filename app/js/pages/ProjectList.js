import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import SafeAreaViewPlus from "../components/SafeAreaViewPlus";
import NavigationBar from "../components/NavigationBar";

export  default  class ProjectList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <SafeAreaViewPlus>
                <NavigationBar style={{backgroundColor:'white'}}/>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.openDrawer();
                }}>
                    <Text>项目列表</Text>
                </TouchableOpacity>
            </SafeAreaViewPlus>
        )
    }

}
