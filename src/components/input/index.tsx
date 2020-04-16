import React from "react";
import {InputComponentStyle} from "./styles";
import {FormInput} from "../../validation/form-input";
import {ViewStyle} from "react-native";

interface Props {
  input: FormInput;
  label?: string;
  style?: ViewStyle;
  isLoading?: boolean;
  warningMessage?: string;
}

export class CustomInput extends React.Component<Props> {
  getWarningMessage = () => {};

  render = () => {
    const {View, Label, Input, MessageText, MessageView} = InputComponentStyle;
    const {label, input, style, isLoading, warningMessage} = this.props;

    return (
      <View style={style}>
        {label !== undefined && <Label isLoading={isLoading}>{label}</Label>}
        <Input
          ref={ref => (input.ref = ref!)}
          isLoading={isLoading}
          value={input.value}
          onChangeText={text => (input.value = text)}
          secureTextEntry={input.isPassword}
          keyboardType={input.keyboardType}
          onBlur={() => (input.isFocused = false)}
          onFocus={() => (input.isFocused = true)}
        />
        {warningMessage !== undefined && (
          <MessageView>
            <MessageText>{warningMessage}</MessageText>
          </MessageView>
        )}
      </View>
    );
  };
}
