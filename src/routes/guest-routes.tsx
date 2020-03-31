import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RoutesName} from "./routes-name";
import {LoginConnectedScreen} from "../screens/login/view";

const Stack = createStackNavigator();

export const GuestRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RoutesName.loginScreen}
      component={LoginConnectedScreen}
    />
  </Stack.Navigator>
);
