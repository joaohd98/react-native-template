import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor, store} from "../redux/configure-store";
import {NavigationContainer} from "@react-navigation/native";
import {RoutesName} from "../routes/routes-name";
import {StackPureNavigator} from "../components/stack-pure-navigator";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "react-native";
import {GuestRoutes} from "../routes/guest-routes";
import {LoggedRoutes} from "../routes/logged-routes";

const Stack = createStackNavigator();

export const Layout = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StackPureNavigator>
          <Stack.Screen name={RoutesName.GuestRoutes} component={GuestRoutes} />
          <Stack.Screen name={RoutesName.LoggedRoutes} component={LoggedRoutes} />
        </StackPureNavigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
