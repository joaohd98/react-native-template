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
import Config from "react-native-config";
import {Text} from "react-native";

export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  state = {
    raCpf: new FormInput({
      changeInput: value => this.setState({raCpf: value}),
      rules: [{type: RulesType.required}],
      keyboardType: "number-pad",
    }),
    password: new FormInput({
      changeInput: value => this.setState({password: value}),
      rules: [{type: RulesType.required}],
      isPassword: true,
    }),
    status: "",
  };

  render() {
    const {raCpf, password} = this.state;

    return (
      <Container>
        <LoginScreenFormContainer textVisible={!raCpf.isFocused && !password.isFocused}>
          <LoginScreenInputRaCpf input={raCpf} />
          <LoginScreenInputPassword input={password} />
          <LoginScreenFormFooter
            isSubmitEnabled={raCpf.isValid() && password.isValid()}
            visibleForgotPassword={!raCpf.isFocused && !password.isFocused}
          />
        </LoginScreenFormContainer>
        <Text style={{color: "#FFF"}}>{Config.API_URL}</Text>
        <Text style={{color: "#FFF"}}>{Config.GOOGLE_MAPS_API_KEY}</Text>
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
