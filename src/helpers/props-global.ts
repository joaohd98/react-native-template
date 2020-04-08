import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {RouteStackParamList, RoutesTypes} from "../routes/routes-name";

export interface PropsGlobal<RouteName extends RoutesTypes> {
  children?: JSX.Element[] | JSX.Element;
  route: RouteProp<RouteStackParamList, RouteName>;
  navigation: StackNavigationProp<RouteStackParamList, RouteName>;
}
