import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor, store} from "../redux/configure-store";
import {NavigationContainer} from "@react-navigation/native";
import {StackPureNavigator} from "../components/stack-pure-navigator";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "react-native";
import {GuestRoutes} from "../routes/guest-routes";
import {LoggedRoutes} from "../routes/logged-routes";
import {configureInterceptor} from "../helpers/interceptor";
import {RouteStackParamList} from "../routes/routes-name";

const Stack = createStackNavigator<RouteStackParamList>();

export const Layout = () => {
  useEffect(() => {
    configureInterceptor();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackPureNavigator>
            <Stack.Screen name={"GuestRoutes"} component={GuestRoutes} />
            <Stack.Screen name={"LoggedRoutes"} component={LoggedRoutes} />
          </StackPureNavigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
