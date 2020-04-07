import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "../screens/home/view";
import {RoutesName} from "./routes-name";

const Stack = createStackNavigator();

export const LoggedRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name={RoutesName.homeScreen} component={HomeScreen} />
  </Stack.Navigator>
);
