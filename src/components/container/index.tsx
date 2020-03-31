import React from "react";
import {ContainerStyle} from "./styles";
import {PropsGlobal} from "../../helpers/props-global";

export class Container extends React.Component<PropsGlobal> {
  render = () => {
    const {View} = ContainerStyle;

    return <View>{this.props.children}</View>;
  };
}
