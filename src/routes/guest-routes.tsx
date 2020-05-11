import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RouteStackParamList} from "./routes-name";
import {LoginConnectedScreen} from "../screens/login/view";
import {Colors} from "../theme/colors";
import {StatusBar} from "react-native";

const Stack = createStackNavigator<RouteStackParamList>();

export const GuestRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: "",
      headerStyle: {
        backgroundColor: Colors.black,
        borderBottomWidth: 0,
        height: StatusBar.currentHeight,
        elevation: 0,
        shadowOpacity: 0,
      },
    }}
  >
    <Stack.Screen name={"LoginScreen"} component={LoginConnectedScreen} />
  </Stack.Navigator>
);
