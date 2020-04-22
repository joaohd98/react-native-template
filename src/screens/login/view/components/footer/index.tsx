import React from "react";
import {LoginScreenFormFooterStyles} from "./styles";
import {LoginScreenFormFooterConst} from "./const";
import {FooterButton} from "../../../../../components/footer-button";
import {ServiceStatus} from "../../../../../services/model";
import {FormInput} from "../../../../../validation/form-input";

interface Props {
  rmCpfInput: FormInput;
  passwordInput: FormInput;
  status: ServiceStatus;
  visibleForgotPassword: boolean;
  isSubmitEnabled: boolean;
  onSubmit: () => void;
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

  getSubmitButton = () => {
    const {footerText, footerTextNext, footerTextError} = LoginScreenFormFooterConst;
    const {isSubmitEnabled, onSubmit, status, rmCpfInput, passwordInput} = this.props;

    const getProps = (): {text: string; onPress: () => void; isEnabled: boolean} => {
      const defaultProps = {
        text: footerText,
        isEnabled: isSubmitEnabled,
        onPress: () => onSubmit(),
      };

      if (rmCpfInput && rmCpfInput.isFocused) {
        return passwordInput.isValid()
          ? defaultProps
          : {
              text: footerTextNext,
              isEnabled: rmCpfInput.isValid(),
              onPress: () => passwordInput.ref.focus(),
            };
      } else if (passwordInput && passwordInput.isFocused) {
        return rmCpfInput.isValid()
          ? defaultProps
          : {
              text: footerTextNext,
              isEnabled: passwordInput.isValid(),
              onPress: () => rmCpfInput.ref.focus(),
            };
      } else if (status === ServiceStatus.noInternetConnection || status === ServiceStatus.exception) {
        return {
          text: footerTextError,
          isEnabled: isSubmitEnabled,
          onPress: () => onSubmit(),
        };
      } else {
        return defaultProps;
      }
    };

    return <FooterButton status={status} {...getProps()} />;
  };

  render = () => (
    <>
      {this.getPasswordText()}
      {this.getSubmitButton()}
    </>
  );
}
