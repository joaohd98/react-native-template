import React from "react";
import {StatesReducers} from "../../../redux/reducers";
import {connect} from "react-redux";
import {Container} from "../../../components/container";
import {LoginScreenFormContainer} from "./components/form-container";
import {LoginScreenInputRaCpf} from "./components/input-ra-cpf";
import {LoginScreenInputPassword} from "./components/input-password";
import {LoginScreenFormFooter} from "./components/footer";

export default class LoginScreen extends React.PureComponent {
  render() {
    return (
      <Container footerContent={<LoginScreenFormFooter />}>
        <LoginScreenFormContainer>
          <LoginScreenInputRaCpf />
          <LoginScreenInputPassword />
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
