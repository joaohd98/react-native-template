import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RouteStackParamList} from "./routes-name";
import {LoginConnectedScreen} from "../screens/login/view";
import {Colors} from "../theme/colors";

const Stack = createStackNavigator<RouteStackParamList>();

export const GuestRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: "",
      headerTransparent: true,
      headerStyle: {
        backgroundColor: Colors.black,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
    }}
  >
    <Stack.Screen name={"LoginScreen"} component={LoginConnectedScreen} />
  </Stack.Navigator>
);
