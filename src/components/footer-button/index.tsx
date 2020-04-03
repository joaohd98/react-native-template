import React from "react";
import {FooterButtonStyles} from "./styles";

export class FooterButton extends React.Component {
  render = () => {
    const {TouchableOpacity, Text} = FooterButtonStyles;

    return (
      <TouchableOpacity>
        <Text>FAZER LOGIN</Text>
      </TouchableOpacity>
    );
  };
}
