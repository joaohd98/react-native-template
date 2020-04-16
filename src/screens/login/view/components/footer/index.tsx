import React from "react";
import {LoginScreenFormFooterStyles} from "./styles";
import {LoginScreenFormFooterConst} from "./const";
import {FooterButton} from "../../../../../components/footer-button";
import {ServiceStatus} from "../../../../../services/model";
import {FormInput} from "../../../../../validation/form-input";

interface Props {
  status: ServiceStatus;
  rmCpfInput: FormInput;
  passwordInput: FormInput;
  onSubmit: () => void;
  visibleForgotPassword: boolean;
  isSubmitEnabled: boolean;
}

export class LoginScreenFormFooter extends React.Component<Props> {
  getPasswordText = () => {
    const {ForgotPasswordButton, ForgotPasswordText} = LoginScreenFormFooterStyles;
    const {forgotPassword} = LoginScreenFormFooterConst;
    const {visibleForgotPassword, status} = this.props;

    return (
      <ForgotPasswordButton>
        {visibleForgotPassword && (
          <ForgotPasswordText isLoading={status === ServiceStatus.loading}>{forgotPassword}</ForgotPasswordText>
        )}
      </ForgotPasswordButton>
    );
  };

  getFooterButton = () => {
    const {footerText, footerTextNext, footerTextError} = LoginScreenFormFooterConst;
    const {isSubmitEnabled, onSubmit, status, rmCpfInput, passwordInput} = this.props;

    const getProps = (): {text: string; onPress: () => void; isEnabled: boolean} => {
      if (rmCpfInput && rmCpfInput.isFocused) {
        return {
          text: footerTextNext,
          isEnabled: rmCpfInput.isValid(),
          onPress: () => passwordInput.ref.focus(),
        };
      } else if (passwordInput && passwordInput.isFocused) {
        return {
          text: footerText,
          isEnabled: isSubmitEnabled,
          onPress: () => onSubmit(),
        };
      } else if (status === ServiceStatus.noInternetConnection || status === ServiceStatus.exception) {
        return {
          text: footerTextError,
          isEnabled: isSubmitEnabled,
          onPress: () => onSubmit(),
        };
      } else {
        return {
          text: footerText,
          isEnabled: isSubmitEnabled,
          onPress: () => onSubmit(),
        };
      }
    };

    return <FooterButton status={status} {...getProps()} />;
  };

  render = () => (
    <>
      {this.getPasswordText()}
      {this.getFooterButton()}
    </>
  );
}
