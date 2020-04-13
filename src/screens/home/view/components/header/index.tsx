import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteStackParamList} from "../../../../../routes/routes-name";
import {HomeScreenHeaderStyles} from "./styles";
import {HomeScreenHeaderConst} from "./const";
import {CustomImg} from "../../../../../assets/images";

export const HomeScreenHeader = (navigation: StackNavigationProp<RouteStackParamList, "HomeScreen">) => {
  const {logoutText} = HomeScreenHeaderConst;
  const {LogoutButton, LogoutText} = HomeScreenHeaderStyles;

  navigation.setOptions({
    headerLeft: () => (
      <LogoutButton activeOpacity={0.6}>
        <LogoutText>{logoutText}</LogoutText>
      </LogoutButton>
    ),
    headerRight: () => <CustomImg.Logo height={100} width={100} />,
  });
};
