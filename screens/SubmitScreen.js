import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Slider,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image1: {
    width: 550,
    height: 350,
    position: 'relative',
    marginTop: 10,
  },
  image2: {
    width: 75,
    height: 75,
  },
  image3: {
    width: 200,
    height: 200,
  },
  image4: {
    width: 80,
    height: 80,
  },
  iconContainer: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
});

const SubmitScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  // Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 1.5
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex-row items-center p-2 bg-white`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute z-20 px-4`}
        >
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'center', marginTop: 50}}>
        <Image
        style={styles.image1}
        source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/message.png'}}
        />
        <Text style={tw`italic font-bold absolute top-20 bottom-10 flex justify-center text-center left-10 right-10 text-xl`}>Thanks for being a responsible citizen . We have notified the concerned authorities with the issue you reported,Rest assured,your issue will be resolved very soon.</Text>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
        <Image
        style={styles.image3}
        source={{uri: 'https://raw.githubusercontent.com/Eric-nguyen1402/Project-2020/master/female1.png'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubmitScreen;
