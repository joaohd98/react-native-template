import React from "react";
import {PropsGlobal} from "../../../../../helpers/props-global";
import {LoginScreenFormContainerConstants} from "./const";
import {LoginScreenFormContainerStyles} from "./styles";

interface Props extends PropsGlobal {
  submitForm?: () => void;
}

export class LoginScreenFormContainer extends React.Component<Props> {
  render = () => {
    const {ContainerView, TitleView, MessageView} = LoginScreenFormContainerStyles;
    const {student, studentInstructions} = LoginScreenFormContainerConstants;
    const {children} = this.props;

    return (
      <ContainerView>
        <TitleView>{student}</TitleView>
        <MessageView>{studentInstructions}</MessageView>
        {children}
      </ContainerView>
    );
  };
}
