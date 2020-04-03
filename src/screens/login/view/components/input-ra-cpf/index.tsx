import React from "react";
import {CustomInput} from "../../../../../components/input";
import {LoginScreenInputRaCpfConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";

interface Props {
  input: FormInput;
}

export class LoginScreenInputRaCpf extends React.Component<Props> {
  render = () => {
    const {label} = LoginScreenInputRaCpfConst;
    const {input} = this.props;

    return <CustomInput label={label} input={input} />;
  };
}
