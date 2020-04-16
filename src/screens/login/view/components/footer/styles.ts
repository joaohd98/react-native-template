import styled from "styled-components/native";
import {Fonts} from "../../../../../theme/fonts";
import {Colors} from "../../../../../theme/colors";
import {CustomText} from "../../../../../components/text";

export const LoginScreenFormFooterStyles = {
  ForgotPasswordButton: styled.TouchableOpacity`
    margin-vertical: 25px;
  `,
  ForgotPasswordText: styled(CustomText)`
    font-family: ${Fonts.roboto.regular};
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01px;
    text-decoration-line: underline;
    color: ${Colors.lightBold};
  `,
};
