import React from "react";
import {InputComponentStyle} from "./styles";
import {FormInput} from "../../validation/form-input";

interface Props {
  label?: string;
  input: FormInput;
}

export class CustomInput extends React.Component<Props> {
  render = () => {
    const {View, Label, Input} = InputComponentStyle;
    const {label, input} = this.props;

    return (
      <View>
        {label !== undefined && <Label>{label}</Label>}
        <Input
          value={input.value}
          onChangeText={text => (input.value = text)}
          secureTextEntry={input.isPassword}
          keyboardType={input.keyboardType}
          onBlur={() => (input.isFocused = false)}
          onFocus={() => (input.isFocused = true)}
        />
      </View>
    );
  };
}
