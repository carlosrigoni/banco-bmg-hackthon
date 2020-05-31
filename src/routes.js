import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import InvestimentScreen from "./pages/InvestimentScreen";
import StaticsScreen from "./pages/StatisticsScreen";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Investment" component={InvestimentScreen} />
        <AppStack.Screen name="Statics" component={StaticsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
