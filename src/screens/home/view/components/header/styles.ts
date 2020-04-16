import styled from "styled-components/native";
import {Fonts} from "../../../../../theme/fonts";
import {Colors} from "../../../../../theme/colors";
import {CustomText} from "../../../../../components/text";

export const HomeScreenHeaderStyles = {
  LogoutButton: styled.TouchableOpacity``,
  LogoutText: styled(CustomText)`
    font-family: ${Fonts.roboto.regular};
    font-size: 21px;
    line-height: 28px;
    align-items: center;
    letter-spacing: 0.01px;
    color: ${Colors.lightBold};
  `,
};
