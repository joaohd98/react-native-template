import React from "react";
import {LoginScreenFormFooterStyles} from "./styles";
import {LoginScreenFormFooterConst} from "./const";
import {FooterButton} from "../../../../../components/footer-button";

interface Props {
  visibleForgotPassword: boolean;
}

export class LoginScreenFormFooter extends React.Component<Props> {
  render = () => {
    const {ForgotPasswordButton, ForgotPasswordText} = LoginScreenFormFooterStyles;
    const {forgotPassword, footerText} = LoginScreenFormFooterConst;
    const {visibleForgotPassword} = this.props;

    return (
      <>
        <ForgotPasswordButton>
          {visibleForgotPassword && <ForgotPasswordText>{forgotPassword}</ForgotPasswordText>}
        </ForgotPasswordButton>
        <FooterButton text={footerText} />
      </>
    );
  };
}
