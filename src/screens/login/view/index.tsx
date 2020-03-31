import React from "react";
import {Text} from "react-native";
import {bindActionCreators, Dispatch} from "redux";
import {StatesReducers} from "../../../redux/reducers";
import {connect} from "react-redux";
import {LoginInitialState} from "./redux/login-screen-reducer";

export default class LoginScreen extends React.PureComponent {
  render() {
    const a = "111";

    return (
      <>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
      </>
    );
  }
}

const mapStateToProps = (state: StatesReducers) => ({
  ...state.loginScreenReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LoginInitialState.functions!, dispatch),
});

export const LoginConnectedScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
