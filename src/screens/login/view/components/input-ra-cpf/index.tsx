import React from "react";
import {LoginScreenInputRaCpfConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";
import {LoginScreenInputRaCpfStyles} from "./styles";

interface Props {
  input: FormInput;
}

export class LoginScreenInputRaCpf extends React.Component<Props> {
  render = () => {
    const {Input} = LoginScreenInputRaCpfStyles;
    const {label} = LoginScreenInputRaCpfConst;
    const {input} = this.props;

    return <Input label={label} input={input} />;
  };
}
