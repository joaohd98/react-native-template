import React from "react";
import {FooterButtonStyles} from "./styles";
import {Colors} from "../../theme/colors";

interface Props {
  text: string;
  isEnabled: boolean;
  onPress: () => void;
}

export class FooterButton extends React.Component<Props> {
  render = () => {
    const {TouchableOpacity, LinearGradient, Text} = FooterButtonStyles;
    const {text, isEnabled, onPress} = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} disabled={!isEnabled} onPress={() => onPress()}>
        <LinearGradient colors={[Colors.primary, Colors.primaryGradient]} angle={180}>
          <Text isEnabled={isEnabled}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
}
