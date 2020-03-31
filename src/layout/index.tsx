import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor, store} from "../redux/configure-store";
import {NavigationContainer} from "@react-navigation/native";
import {GuestRoutes} from "../routes/guest-routes";
import {RoutesName} from "../routes/routes-name";
import {StackPureNavigator} from "../components/stack-pure-navigator";
import {LoggedRoutes} from "../routes/logged-routes";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const {loggedRoutes, guestRoutes} = RoutesName;

export const Layout = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StackPureNavigator initialRouteName={RoutesName.guestRoutes}>
          <Stack.Screen name={guestRoutes} component={GuestRoutes} />
          <Stack.Screen name={loggedRoutes} component={LoggedRoutes} />
        </StackPureNavigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
