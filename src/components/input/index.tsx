import React from "react";
import {InputComponentStyle} from "./styles";

interface Props {
  label?: string;
}

export class CustomInput extends React.Component<Props> {
  render = () => {
    const {View, Label, Input} = InputComponentStyle;
    const {label} = this.props;

    return (
      <View>
        {label !== undefined && <Label>{label}</Label>}
        <Input />
      </View>
    );
  };
}
