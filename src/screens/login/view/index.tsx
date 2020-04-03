import React from "react";
import {StatesReducers} from "../../../redux/reducers";
import {connect} from "react-redux";
import {Container} from "../../../components/container";
import {LoginScreenFormContainer} from "./components/form-container";
import {LoginScreenInputRaCpf} from "./components/input-ra-cpf";
import {LoginScreenInputPassword} from "./components/input-password";
import {LoginScreenFormFooter} from "./components/footer";
import {LoginScreenProps} from "./model/login-screen-props";
import {LoginScreenState} from "./model/login-screen-state";
import {FormInput} from "../../../validation/form-input";
import {RulesType} from "../../../validation/rules-type";
// import {Text} from "react-native";

export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  state = {
    raCpf: new FormInput({
      changeInput: value => this.setState({raCpf: value}),
      rules: [{type: RulesType.required}],
    }),
    password: new FormInput({
      changeInput: value => this.setState({password: value}),
      rules: [{type: RulesType.required}],
    }),
    status: "",
  };

  render() {
    const {raCpf, password} = this.state;

    return (
      <Container footerContent={<LoginScreenFormFooter />}>
        <LoginScreenFormContainer>
          <LoginScreenInputRaCpf input={raCpf} />
          <LoginScreenInputPassword input={password} />
          {/*<Text style={{color: "white"}}>{raCpf.status}</Text>*/}
          {/*<Text style={{color: "white"}}>{password.status}</Text>*/}
        </LoginScreenFormContainer>
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
