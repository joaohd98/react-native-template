import {HomeScreenNavigationParams} from "../screens/home/view/model/home-screen-navigation-params";

export type RoutesTypes = "GuestRoutes" | "LoggedRoutes" | "LoginScreen" | "HomeScreen";

export const RoutesName: {[key in RoutesTypes]: RoutesTypes} = {
  GuestRoutes: "GuestRoutes",
  LoggedRoutes: "LoggedRoutes",
  LoginScreen: "LoginScreen",
  HomeScreen: "HomeScreen",
};

export type RouteStackParamList = {
  GuestRoutes: undefined;
  LoggedRoutes: undefined;
  LoginScreen: undefined;
  HomeScreen: HomeScreenNavigationParams;
};
