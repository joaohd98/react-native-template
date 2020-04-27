import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {StatesReducers} from "../../redux/reducers";
import {connect} from "react-redux";
import {RouteStackParamList} from "../../routes/routes-name";

interface Props {
  rmCpf?: string;
  children?: JSX.Element[] | JSX.Element;
}

const Stack = createStackNavigator<RouteStackParamList>();

class StackPureNavigatorComponentPure extends React.Component<Props> {
  render = () => {
    const {rmCpf, children} = this.props;

    return (
      <Stack.Navigator headerMode={"none"} initialRouteName={rmCpf !== undefined ? "LoggedRoutes" : "GuestRoutes"}>
        {children}
      </Stack.Navigator>
    );
  };
}

const mapStateToProps = (state: StatesReducers): Props => ({
  rmCpf: state.loginScreenReducer.rmCpf,
});

export const StackPureNavigator = connect(mapStateToProps, null)(StackPureNavigatorComponentPure);
