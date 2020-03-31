import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

interface Props {
  initialRouteName: string;
}

export class StackPureNavigator extends React.Component<Props> {
  render = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        headerMode={"none"}
        initialRouteName={this.props.initialRouteName}
      >
        {this.props.children}
      </Stack.Navigator>
    );
  };
}
