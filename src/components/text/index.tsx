import React from "react";
import {TextStyle, View} from "react-native";
import {CustomTextStyles} from "./styles";

interface Props {
  style?: TextStyle;
  isLoading?: boolean;
  children?: string;
}

export class CustomText extends React.Component<Props> {

  render = () => {
    const {style, isLoading, children} = this.props;
    const {TextWithLoading} = CustomTextStyles;

    return (
      <View>
        <TextWithLoading style={style} isLoading={isLoading}>
          {children}
        </TextWithLoading>
      </View>
    );
  };
}
