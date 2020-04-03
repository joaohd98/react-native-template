import React from "react";
import {FooterButtonStyles} from "./styles";
import {TouchableOpacity} from "react-native";
import {Colors} from "../../theme/colors";

interface Props {
  text: string;
}

export class FooterButton extends React.Component<Props> {
  render = () => {
    const {LinearGradient, Text} = FooterButtonStyles;
    const {text} = this.props;

    return (
      <TouchableOpacity>
        <LinearGradient
          colors={[Colors.primary, Colors.primaryGradient]}
          angle={180}
        >
          <Text>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
}
