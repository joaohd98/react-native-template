import React from "react";
import {HomeScreenHeaderStyles} from "./styles";
import {HomeScreenHeaderConst} from "./const";
import {CustomImg} from "../../../../../assets/images";
import {HomeScreenProps} from "../../model/home-screen-props";
import {RoutesName} from "../../../../../routes/routes-name";

export const setHomeScreenHeader = (props: HomeScreenProps) => {
  const {navigation, functions} = props;
  const {logoutText} = HomeScreenHeaderConst;
  const {LogoutButton, LogoutText} = HomeScreenHeaderStyles;

  navigation!.setOptions({
    headerLeft: () => (
      <LogoutButton
        activeOpacity={0.6}
        onPress={() => functions.logoutUser(() => navigation?.push(RoutesName.GuestRoutes))}
      >
        <LogoutText>{logoutText}</LogoutText>
      </LogoutButton>
    ),
    headerRight: () => <CustomImg.Logo height={100} width={100} />,
  });
};
