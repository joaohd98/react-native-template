import React from "react";
import {LoginScreenFormContainerConstants} from "./const";
import {LoginScreenFormContainerStyles} from "./styles";

interface Props {
  textVisible: boolean;
  children: JSX.Element;
}

export class LoginScreenFormContainer extends React.Component<Props> {
  render = () => {
    const {ContainerView, TitleView, MessageView} = LoginScreenFormContainerStyles;
    const {student, studentInstructions} = LoginScreenFormContainerConstants;
    const {children, textVisible} = this.props;

    return (
      <ContainerView>
        {textVisible && (
          <>
            <TitleView>{student}</TitleView>
            <MessageView>{studentInstructions}</MessageView>
          </>
        )}
        {children}
      </ContainerView>
    );
  };
}
