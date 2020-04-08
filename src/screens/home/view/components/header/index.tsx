import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteStackParamList} from "../../../../../routes/routes-name";
import {images} from "../../../../../assets";
import {Image} from "react-native";
import {HomeScreenHeaderStyles} from "./styles";
import {HomeScreenHeaderConst} from "./const";

export const HomeScreenHeader = (navigation: StackNavigationProp<RouteStackParamList, "HomeScreen">) => {
  const {logoutText} = HomeScreenHeaderConst;
  const {LogoutButton, LogoutText} = HomeScreenHeaderStyles;

  navigation.setOptions({
    headerLeft: () => (
      <LogoutButton activeOpacity={0.6}>
        <LogoutText>{logoutText}</LogoutText>
      </LogoutButton>
    ),
    headerRight: () => <Image resizeMode={"stretch"} source={images.logo} width={100} height={100} />,
  });
};
