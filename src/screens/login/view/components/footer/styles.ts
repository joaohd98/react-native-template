import styled from "styled-components/native";
import {Fonts} from "../../../../../theme/fonts";
import {Colors} from "../../../../../theme/colors";

export const LoginScreenFormFooterStyles = {
  MessageView: styled.View`
    margin-vertical: 5px;
  `,
  MessageText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01px;
    color: ${Colors.primary};
  `,
  ForgotPasswordButton: styled.TouchableOpacity`
    margin-vertical: 50px;
  `,
  ForgotPasswordText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01px;
    text-decoration-line: underline;
    color: ${Colors.lightBold};
  `,
};
