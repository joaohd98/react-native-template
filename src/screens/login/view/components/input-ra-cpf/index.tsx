import React from "react";
import {CustomInput} from "../../../../../components/input";
import {LoginScreenInputRaCpfConst} from "./const";

export class LoginScreenInputRaCpf extends React.PureComponent {
  render = () => {
    const {label} = LoginScreenInputRaCpfConst;

    return <CustomInput label={label} />;
  };
}
