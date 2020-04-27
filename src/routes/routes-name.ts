import {HomeScreenNavigationParams} from "../screens/home/view/model/home-screen-navigation-params";

export type RoutesTypes = "GuestRoutes" | "LoggedRoutes" | "LoginScreen" | "HomeScreen";

export type RouteStackParamList = {
  GuestRoutes: undefined;
  LoggedRoutes: undefined;
  LoginScreen: undefined;
  HomeScreen: HomeScreenNavigationParams;
};
