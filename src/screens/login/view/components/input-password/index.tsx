import React from "react";
import {CustomInput} from "../../../../../components/input";
import {LoginScreenInputPasswordConst} from "./const";

export class LoginScreenInputPassword extends React.PureComponent {
  render = () => {
    const {label} = LoginScreenInputPasswordConst;

    return <CustomInput label={label} />;
  };
}
