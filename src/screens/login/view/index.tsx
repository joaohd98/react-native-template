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
import {loginUserService} from "../../../services/login/service";
import {LoginRequestModel} from "../../../services/login/request";
import {bindActionCreators, Dispatch} from "redux";
import {LoginInitialState} from "./redux/login-screen-reducer";
import {Keyboard} from "react-native";

export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  state = {
    rmCpf: new FormInput({
      changeInput: value => this.setState({rmCpf: value}),
      rules: [{type: RulesType.required}, {type: RulesType.minLength, arg: 2}],
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
    Keyboard.dismiss();

    const {navigation} = this.props;
    const {rmCpf, password} = this.state;
    const {loginUser} = this.props.functions!;

    this.setState({status: ServiceStatus.loading});

    const onSuccess = response => {
      loginUser(response.data!, rmCpf.value, "aluno", () => navigation?.push("LoggedRoutes"));
    };

    const onError = error => {
      this.setState({status: error.message});
    };

    loginUserService(new LoginRequestModel({usuario: rmCpf.value, senha: password.value})).then(onSuccess, onError);
  };

  render() {
    const {rmCpf, password, status} = this.state;
    const hasNoFocus = !rmCpf.isFocused && !password.isFocused;

    return (
      <Container
        isLoading={status === ServiceStatus.loading}
        footerHeight={50}
        footerContent={
          <LoginScreenFormFooter
            rmCpfInput={rmCpf}
            passwordInput={password}
            status={status}
            onSubmit={this.loginUser}
            isSubmitEnabled={rmCpf.isValid() && password.isValid()}
            visibleForgotPassword={hasNoFocus}
          />
        }
      >
        <LoginScreenFormContainer status={status} textVisible={hasNoFocus}>
          <LoginScreenInputRaCpf input={rmCpf} status={status} />
          <LoginScreenInputPassword input={password} status={status} noInputsFocus={hasNoFocus} />
        </LoginScreenFormContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: StatesReducers): LoginScreenProps => ({
  ...state.loginScreenReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(LoginInitialState.functions!, dispatch),
});

export const LoginConnectedScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
