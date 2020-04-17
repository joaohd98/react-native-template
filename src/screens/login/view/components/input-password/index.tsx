import React from "react";
import {LoginScreenInputPasswordConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";
import {LoginScreenInputPasswordStyles} from "./styles";
import {ServiceStatus} from "../../../../../services/model";

interface Props {
  input: FormInput;
  status: ServiceStatus;
  noInputsFocus: boolean;
}

export class LoginScreenInputPassword extends React.Component<Props> {
  getStatusMessage = () => {
    const {exceptionText, noInternetConnectionText} = LoginScreenInputPasswordConst;
    const {status, noInputsFocus} = this.props;

    const warningMessages = {
      [ServiceStatus.exception]: exceptionText,
      [ServiceStatus.noInternetConnection]: noInternetConnectionText,
    };

    return noInputsFocus ? warningMessages[status] : "";
  };

  render = () => {
    const {Input} = LoginScreenInputPasswordStyles;
    const {label} = LoginScreenInputPasswordConst;
    const {input, status} = this.props;

    return (
      <Input
        label={label}
        input={input}
        warningMessage={this.getStatusMessage()}
        isLoading={status === ServiceStatus.loading}
      />
    );
  };
}
