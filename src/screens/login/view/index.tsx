import React from "react";
import {Text} from "react-native";
import {StatesReducers} from "../../../redux/reducers";
import {connect} from "react-redux";
import {Container} from "../../../components/container";

export default class LoginScreen extends React.PureComponent {
  render() {
    const a = "111";

    return (
      <Container>
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
      </Container>
    );
  }
}

const mapStateToProps = (state: StatesReducers) => ({
  ...state.loginScreenReducer,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   functions: bindActionCreators(LoginInitialState.functions!, dispatch),
// });

export const LoginConnectedScreen = connect(
  mapStateToProps,
  //mapDispatchToProps
  null
)(LoginScreen);
