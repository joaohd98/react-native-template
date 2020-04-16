import React from "react";
import {LoginScreenFormFooterStyles} from "./styles";
import {LoginScreenFormFooterConst} from "./const";
import {FooterButton} from "../../../../../components/footer-button";
import {ServiceStatus} from "../../../../../services/model";

interface Props {
  status: ServiceStatus;
  onSubmit: () => void;
  visibleForgotPassword: boolean;
  isSubmitEnabled: boolean;
}

export class LoginScreenFormFooter extends React.Component<Props> {
  getStatusMessage = () => {
    const {status} = this.props;
    const {
      exceptionFirstText,
      exceptionSecondText,
      noInternetConnectionFirstText,
      noInternetConnectionSecondText,
    } = LoginScreenFormFooterConst;
    const {MessageView, MessageText} = LoginScreenFormFooterStyles;

    if (status === ServiceStatus.exception) {
      return (
        <MessageView>
          <MessageText>{exceptionFirstText}</MessageText>
          <MessageText>{exceptionSecondText}</MessageText>
        </MessageView>
      );
    } else if (status === ServiceStatus.noInternetConnection) {
      return (
        <MessageView>
          <MessageText>{noInternetConnectionFirstText}</MessageText>
          <MessageText>{noInternetConnectionSecondText}</MessageText>
        </MessageView>
      );
    } else {
      return <></>;
    }
  };
  render = () => {
    const {ForgotPasswordButton, ForgotPasswordText} = LoginScreenFormFooterStyles;
    const {forgotPassword, footerText} = LoginScreenFormFooterConst;
    const {visibleForgotPassword, isSubmitEnabled, onSubmit, status} = this.props;

    return (
      <>
        {this.getStatusMessage()}
        <ForgotPasswordButton>
          {visibleForgotPassword && (
            <ForgotPasswordText isLoading={status === ServiceStatus.loading}>{forgotPassword}</ForgotPasswordText>
          )}
        </ForgotPasswordButton>
        <FooterButton isEnabled={isSubmitEnabled} text={footerText} status={status} onPress={() => onSubmit()} />
      </>
    );
  };
}
