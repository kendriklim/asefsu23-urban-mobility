import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Maps from "../components/Maps";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import SafetyAudit from "../components/SafetyAudit";
import SearchPlace from "./SearchPlace";

import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={tw` bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>

      <View style={tw`h-1/2 border-t-2 border-gray-800`}>
        <Stack.Navigator>

          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
