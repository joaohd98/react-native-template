import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {RoutesName} from "../../routes/routes-name";
import {StatesReducers} from "../../redux/reducers";
import {connect} from "react-redux";

interface Props {
  raCpf?: string;
  children?: JSX.Element[] | JSX.Element;
}

const Stack = createStackNavigator();

class StackPureNavigatorComponentPure extends React.Component<Props> {
  render = () => {
    const {raCpf, children} = this.props;

    return (
      <Stack.Navigator
        headerMode={"none"}
        initialRouteName={raCpf !== undefined ? RoutesName.LoggedRoutes : RoutesName.GuestRoutes}
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
