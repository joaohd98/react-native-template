import styled from "styled-components/native";
import {Colors} from "../../../../../theme/colors";
import {Fonts} from "../../../../../theme/fonts";
import {CustomText} from "../../../../../components/text";

export const LoginScreenFormContainerStyles = {
  ContainerView: styled.View`
    margin-top: 30%;
  `,
  TitleView: styled(CustomText)`
    font-size: 27px;
    font-family: ${Fonts.roboto.light};
    color: ${Colors.white};
    text-align: center;
  `,
  MessageView: styled(CustomText)`
    font-size: 20px;
    line-height: 28px;
    font-family: ${Fonts.roboto.light};
    letter-spacing: 0.02px;
    color: ${Colors.lightGray};
    margin-horizontal: 5%;
    text-align: center;
  `,
};
