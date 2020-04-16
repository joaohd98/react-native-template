import React from "react";
import {InputComponentStyle} from "./styles";
import {FormInput} from "../../validation/form-input";
import {ViewStyle} from "react-native";

interface Props {
  input: FormInput;
  label?: string;
  style?: ViewStyle;
  isLoading?: boolean;
}

export class CustomInput extends React.Component<Props> {
  render = () => {
    const {View, Label, Input} = InputComponentStyle;
    const {label, input, style, isLoading} = this.props;

    return (
      <View style={style}>
        {label !== undefined && <Label isLoading={isLoading}>{label}</Label>}
        <Input
          isLoading={isLoading}
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
