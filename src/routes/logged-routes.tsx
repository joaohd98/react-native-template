import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeConnectedScreen} from "../screens/home/view";
import {Colors} from "../theme/colors";
import {RouteStackParamList} from "./routes-name";

const Stack = createStackNavigator<RouteStackParamList>();

export const LoggedRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: "",
      headerStyle: {
        backgroundColor: Colors.black,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerLeftContainerStyle: {
        marginLeft: 16,
      },
      headerRightContainerStyle: {
        marginRight: 16,
      },
    }}
  >
    <Stack.Screen name={"HomeScreen"} component={HomeConnectedScreen} />
  </Stack.Navigator>
);
