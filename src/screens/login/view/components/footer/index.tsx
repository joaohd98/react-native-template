import React from "react";
import {LoginScreenFormFooterStyles} from "./styles";
import {LoginScreenFormFooterConst} from "./const";
import {FooterButton} from "../../../../../components/footer-button";

export class LoginScreenFormFooter extends React.PureComponent {
  render = () => {
    const {
      ForgotPasswordButton,
      ForgotPasswordText,
    } = LoginScreenFormFooterStyles;
    const {forgotPassword, footerText} = LoginScreenFormFooterConst;

    return (
      <>
        <ForgotPasswordButton>
          <ForgotPasswordText>{forgotPassword}</ForgotPasswordText>
        </ForgotPasswordButton>
        <FooterButton text={footerText} />
      </>
    );
  };
}
