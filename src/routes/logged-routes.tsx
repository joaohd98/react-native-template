import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginScreen} from "../screens/login/view";

const Stack = createStackNavigator();

export const LoggedRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name={"test"} component={LoginScreen} />
  </Stack.Navigator>
);
