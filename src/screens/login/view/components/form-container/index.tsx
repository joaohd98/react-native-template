import React from "react";
import {LoginScreenFormContainerConstants} from "./const";
import {LoginScreenFormContainerStyles} from "./styles";
import {ServiceStatus} from "../../../../../services/model";

interface Props {
  textVisible: boolean;
  children: JSX.Element | JSX.Element[];
  status: ServiceStatus;
}

export class LoginScreenFormContainer extends React.Component<Props> {
  render = () => {
    const {ContainerView, TitleView, MessageView} = LoginScreenFormContainerStyles;
    const {student, studentInstructions} = LoginScreenFormContainerConstants;
    const {children, textVisible, status} = this.props;

    return (
      <ContainerView>
        {textVisible && (
          <>
            <TitleView isLoading={status === ServiceStatus.loading}>{student}</TitleView>
            <MessageView isLoading={status === ServiceStatus.loading}>{studentInstructions}</MessageView>
          </>
        )}
        {children}
      </ContainerView>
    );
  };
}
