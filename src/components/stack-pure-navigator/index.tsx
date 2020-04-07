import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RoutesName} from "../../routes/routes-name";
import {PropsGlobal} from "../../helpers/props-global";
import {StatesReducers} from "../../redux/reducers";
import {connect} from "react-redux";

interface Props extends PropsGlobal {
  raCpf?: string;
}

const Stack = createStackNavigator();

class StackPureNavigatorComponentPure extends React.Component<Props> {
  render = () => {
    const {raCpf, children} = this.props;

    return (
      <Stack.Navigator
        headerMode={"none"}
        initialRouteName={raCpf !== undefined ? RoutesName.loggedRoutes : RoutesName.guestRoutes}
      >
        {children}
      </Stack.Navigator>
    );
  };
}

const mapStateToProps = (state: StatesReducers): Props => ({
  raCpf: state.loginScreenReducer.raCpf,
});

export const StackPureNavigator = connect(mapStateToProps, null)(StackPureNavigatorComponentPure);
