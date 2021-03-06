import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon,Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafetyAudit} from './SafetyAudit';
import { useNavigation} from "@react-navigation/native";

const NavOptions = ({}) => {


  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-red-100`}>
    <TouchableOpacity
      style={{
          // borderWidth:1,
          // borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          // width:100,
          // height:100,
          // backgroundColor:'#cd5c5c',
          // borderRadius:100,
          // marginLeft:100,
          // marginBottom:40
        }}
        onPress={() => { navigation.navigate("CallScreen"); }}
    >
      <Image source={require('../assets/callrescue.png')} style={{height:200,width:200}}></Image>
    </TouchableOpacity>
   
       </View>
  );
};

export default NavOptions;
