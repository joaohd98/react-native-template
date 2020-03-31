import React from "react";
import {InputComponentStyle} from "./styles";

export class CustomInput extends React.Component {
  render = () => {
    const {View, Input, LabelError} = InputComponentStyle;

    return (
      <View>
        <Input />
        <LabelError>TESTE</LabelError>
      </View>
    );
  };
}
