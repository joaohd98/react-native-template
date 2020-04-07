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
import {ServiceStatus} from "../../../services/model";
import {LoginService} from "../../../services/login/service";
import {LoginRequestModel} from "../../../services/login/request";

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
    status: ServiceStatus.noAction,
  };

  loginUser = () => {
    const {raCpf, password} = this.state;

    LoginService.loginUser(new LoginRequestModel({usuario: raCpf.value, senha: password.value})).then(
      response => {
        this.setState({status: response.status});
      },
      e => {
        this.setState({status: e.message});
      }
    );
  };

  render() {
    const {raCpf, password, status} = this.state;

    return (
      <Container>
        <LoginScreenFormContainer textVisible={!raCpf.isFocused && !password.isFocused}>
          <LoginScreenInputRaCpf input={raCpf} />
          <LoginScreenInputPassword input={password} />
          <LoginScreenFormFooter
            status={status}
            onSubmit={this.loginUser}
            isSubmitEnabled={raCpf.isValid() && password.isValid()}
            visibleForgotPassword={!raCpf.isFocused && !password.isFocused}
          />
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
