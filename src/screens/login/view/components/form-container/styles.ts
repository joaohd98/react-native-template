import styled from "styled-components/native";
import {Colors} from "../../../../../theme/colors";
import {Fonts} from "../../../../../theme/fonts";

export const LoginScreenFormContainerStyles = {
  ContainerView: styled.View`
    margin-top: 15%;
  `,
  TitleView: styled.Text`
    font-size: 27px;
    font-family: ${Fonts.roboto.light};
    color: ${Colors.white};
    text-align: center;
  `,
  MessageView: styled.Text`
    font-size: 20px;
    line-height: 28px;
    font-family: ${Fonts.roboto.light};
    letter-spacing: 0.02px;
    color: ${Colors.lightGray};
    margin-horizontal: 5%;
    text-align: center;
  `,
};
