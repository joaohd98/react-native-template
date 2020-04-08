import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RoutesName} from "./routes-name";
import {HomeConnectedScreen} from "../screens/home/view";
import {Colors} from "../theme/colors";

const Stack = createStackNavigator();

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
    <Stack.Screen name={typeof RoutesName.HomeScreen} component={HomeConnectedScreen} />
  </Stack.Navigator>
);
