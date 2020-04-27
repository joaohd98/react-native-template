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
import {bindActionCreators, Dispatch} from "redux";
import {LoginInitialState} from "./redux/login-screen-reducer";
import {Keyboard} from "react-native";
import {Services} from "../../../services/url";

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

  componentDidUpdate(_, prevState: Readonly<LoginScreenState>): void {
    if (prevState.status === ServiceStatus.loading && this.state.status === ServiceStatus.success) {
      this.props.navigation?.push("LoggedRoutes");
    }
  }

  loginUser = () => {
    Keyboard.dismiss();

    const {rmCpf, password} = this.state;
    const {loginUser} = this.props.functions!;

    this.setState({status: ServiceStatus.loading});

    const onSuccess = response => {
      loginUser(response.data!, rmCpf.value, "aluno", () => this.setState({status: ServiceStatus.success}));
    };

    const onError = error => {
      this.setState({status: error.message});
    };

    Services.login(rmCpf.value, password.value).then(onSuccess, onError);
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
