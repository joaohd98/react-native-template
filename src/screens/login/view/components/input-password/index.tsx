import React from "react";
import {CustomInput} from "../../../../../components/input";
import {LoginScreenInputPasswordConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";

interface Props {
  input: FormInput;
}

export class LoginScreenInputPassword extends React.Component<Props> {
  render = () => {
    const {label} = LoginScreenInputPasswordConst;
    const {input} = this.props;

    return <CustomInput label={label} input={input} />;
  };
}
