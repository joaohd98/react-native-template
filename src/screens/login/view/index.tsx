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
import {bindActionCreators, Dispatch} from "redux";
import {LoginInitialState} from "./redux/login-screen-reducer";
import {RoutesName} from "../../../routes/routes-name";

export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  state = {
    rmCpf: new FormInput({
      value: "13202",
      changeInput: value => this.setState({rmCpf: value}),
      rules: [{type: RulesType.required}],
      keyboardType: "number-pad",
    }),
    password: new FormInput({
      value: "020310",
      changeInput: value => this.setState({password: value}),
      rules: [{type: RulesType.required}],
      isPassword: true,
    }),
    status: ServiceStatus.noAction,
  };

  loginUser = () => {
    const {navigation} = this.props;
    const {rmCpf, password} = this.state;
    const {loginUser} = this.props.functions!;

    LoginService.loginUser(new LoginRequestModel({usuario: rmCpf.value, senha: password.value})).then(
      response => {
        loginUser(response.data!, rmCpf.value, "aluno");
        navigation?.push(RoutesName.HomeScreen);
      },
      ({message}) => this.setState({status: message})
    );
  };

  render() {
    const {rmCpf, password, status} = this.state;

    return (
      <Container>
        <LoginScreenFormContainer textVisible={!rmCpf.isFocused && !password.isFocused}>
          <LoginScreenInputRaCpf input={rmCpf} />
          <LoginScreenInputPassword input={password} />
          <LoginScreenFormFooter
            status={status}
            onSubmit={this.loginUser}
            isSubmitEnabled={rmCpf.isValid() && password.isValid()}
            visibleForgotPassword={!rmCpf.isFocused && !password.isFocused}
          />
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
