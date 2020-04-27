import "react-native";
import React from "react";
import {mount} from "enzyme";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LoginScreen from "../..//src/screens/login/view";
import {LoginScreenInputRaCpf} from "../../src/screens/login/view/components/input-ra-cpf";
import {LoginScreenFormFooter} from "../../src/screens/login/view/components/footer";
import {FooterButton} from "../../src/components/footer-button";
import {Text, TextInput, TouchableOpacity} from "react-native";
import {LoginScreenInputPassword} from "../../src/screens/login/view/components/input-password";
import {ServiceStatus} from "../../src/services/model";
import {SpinnerLoading} from "../../src/components/spinner-loading";
import {LoginScreenFormContainer} from "../../src/screens/login/view/components/form-container";
import {Container} from "../../src/components/container";
import {LoginScreenInputPasswordConst} from "../../src/screens/login/view/components/input-password/const";
import {Helpers} from "../../src/helpers/helpers";

describe("LoginScreen", () => {
  it("Renderiza com sucesso", async () => {
    renderer.create(<LoginScreen />);
  });
  /*
    Primeira ação: Ativar campo RM
    Dado que o usuário está na tela de login de responsável e toca primeiro no campo RM,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato numérico,
    E, acima do teclado, o botão PRÓXIMO deve ser exibido, em seu estado desabilitado.
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1026%3A695
  */
  it("Ativar campo RM", async () => {
    const wrapper = mount(<LoginScreen />);
    wrapper.find(LoginScreenInputRaCpf).find(TextInput).simulate("focus");
    wrapper.update();

    const raCPf = wrapper.find(LoginScreenInputRaCpf);
    const input = raCPf.find(TextInput);
    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);
    const footerButtonText = footerButton.find(Text);

    expect(raCPf.props().input.isFocused).toBeTruthy();
    expect(input.props().keyboardType).toEqual("number-pad");
    expect(footerButton.props().disabled).toBeTruthy();
    expect(footerButtonText.text()).toEqual("PRÓXIMO");
  });
  /*
    Primeira ação: Ativar campo SENHA
    Dado que o usuário está na tela de login de responsável e toca primeiro no campo SENHA,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato padrão,
    E, acima do teclado, o botão PRÓXIMO deve ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=3713%3A0
  */
  it("Ativar campo senha", async () => {
    const wrapper = mount(<LoginScreen />);
    wrapper.find(LoginScreenInputPassword).find(TextInput).simulate("focus");
    wrapper.update();

    const password = wrapper.find(LoginScreenInputPassword);
    const input = password.find(TextInput);
    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);
    const footerButtonText = footerButton.find(Text);

    expect(password.props().input.isFocused).toBeTruthy();
    expect(input.props().keyboardType).toEqual("default");
    expect(footerButton.props().disabled).toBeTruthy();
    expect(footerButtonText.text()).toEqual("PRÓXIMO");
  });
  /*
   Segunda ação: Campo RM preenchido
   Dado que o usuário está na tela de login de responsável, já preencheu o campo CPF e toca no campo SENHA ou no botão PRÓXIMO,
   Então o campo deve ser exibido em seu estado focus,
   E o teclado do dispositivo deve ser trazido em formato padrão,
   E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.
   https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17939
 */
  it("Campo RM Preencido", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.find(LoginScreenInputRaCpf).find(TextInput).simulate("focus");
    wrapper.find(LoginScreenInputRaCpf).find(TextInput).props().onChangeText("12345");
    wrapper.update();

    wrapper.find(FooterButton).find(TouchableOpacity).props().onPress();
    wrapper.find(LoginScreenInputRaCpf).find(TextInput).simulate("blur");
    wrapper.update();

    const password = wrapper.find(LoginScreenInputPassword);
    const input = password.find(TextInput);
    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);
    const footerButtonText = footerButton.find(Text);

    expect(password.props().input.isFocused).toBeTruthy();
    expect(input.props().keyboardType).toEqual("default");
    expect(footerButton.props().disabled).toBeTruthy();
    expect(footerButtonText.text()).toEqual("FAZER LOGIN");
  });
  /*
    Segunda ação: campo senha preenchido
    Dado que o usuário está na tela de login de responsável, já preencheu o campo SENHA e toca no campo CPF ou no botão PRÓXIMO,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato numérico,
    E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=3714%3A180
  */
  it("Campo senha Preencido", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.find(LoginScreenInputPassword).find(TextInput).simulate("focus");
    wrapper.find(LoginScreenInputPassword).find(TextInput).props().onChangeText("12345");
    wrapper.update();

    wrapper.find(FooterButton).find(TouchableOpacity).props().onPress();
    wrapper.find(LoginScreenInputPassword).find(TextInput).simulate("blur");
    wrapper.update();

    const raCpf = wrapper.find(LoginScreenInputRaCpf);
    const input = raCpf.find(TextInput);
    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);
    const footerButtonText = footerButton.find(Text);

    expect(raCpf.props().input.isFocused).toBeTruthy();
    expect(input.props().keyboardType).toEqual("number-pad");
    expect(footerButton.props().disabled).toBeTruthy();
    expect(footerButtonText.text()).toEqual("FAZER LOGIN");
  });
  /*
    Inserir número no formato completo de RM
    Dado que o usuário está com o campo RM ativo e insere um número no formato correto,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17850
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18119
  */
  it("Campo RM valido", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.find(LoginScreenInputRaCpf).find(TextInput).simulate("focus");
    wrapper.find(LoginScreenInputRaCpf).find(TextInput).props().onChangeText("12345");
    wrapper.update();

    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);

    expect(footerButton.props().disabled).toBeFalsy();
  });
  /*
    Inserir número no formato incompleto de CPF
    Dado que o usuário está com o campo CPF ativo e insere um número incompleto em relação ao formato de CPFs,
    Então o botão de próxima etapa deve permanecer desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1044%3A18697
  */
  it("Campo RM valido", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.find(LoginScreenInputRaCpf).find(TextInput).simulate("focus");
    wrapper.find(LoginScreenInputRaCpf).find(TextInput).props().onChangeText("1");
    wrapper.update();

    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);

    expect(footerButton.props().disabled).toBeTruthy();
  });
  /*
    Inserir senha
    Dado que o usuário está com o campo de SENHA ativo e insere qualquer dado nele,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18029
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18429
  */
  it("Campo senha valido", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.find(LoginScreenInputPassword).find(TextInput).simulate("focus");
    wrapper.find(LoginScreenInputPassword).find(TextInput).props().onChangeText("1234");
    wrapper.update();

    const footerButton = wrapper.find(LoginScreenFormFooter).find(FooterButton).find(TouchableOpacity);

    expect(footerButton.props().disabled).toBeFalsy();
  });
  /*
    Aguardar retorno da validação dos dados
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN,
    Então, até que o retorno da validação seja recebido, o botão deve ser exibido em seu estado loading,
    E os campos devem ser desabilitados,
    E o botão de voltar deve ser desabilitado,
    E o botão Esqueci minha senha deve ser desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20241
  */
  it("Aguardar retorno da validação dos dados", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.setState({status: ServiceStatus.loading});

    const container = wrapper.find(Container);
    const formContainer = wrapper.find(LoginScreenFormContainer);
    const inputRa = wrapper.find(LoginScreenInputRaCpf);
    const inputPassword = wrapper.find(LoginScreenInputPassword);
    const footerContent = wrapper.find(LoginScreenFormFooter);

    expect(container.props().isLoading).toBeTruthy();
    expect(formContainer.find(Text).at(0).props().isLoading).toBeTruthy();
    expect(formContainer.find(Text).at(1).props().isLoading).toBeTruthy();
    expect(inputRa.find(TextInput).props().isLoading).toBeTruthy();
    expect(inputPassword.find(TextInput).props().isLoading).toBeTruthy();
    expect(footerContent.find(TouchableOpacity).find(Text).props().isLoading).toBeTruthy();
    expect(footerContent.find(SpinnerLoading)).toBeTruthy();
  });
  /*
   Acessar com dados válidos
   Dado que o usuário inseriu CPF e SENHA encontrados e validados no banco de dados,
   Então o aplicativo deve direcioná-lo à tela inicial do aplicativo, na visão do responsável.

   https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1105%3A23050
  */
  it("Acessar com dados válidos", async () => {
    const wrapper = mount(<LoginScreen navigation={Helpers.getJestNavigationProps()} />);

    wrapper.setState({status: ServiceStatus.loading});
    wrapper.setState({status: ServiceStatus.success});

    expect(wrapper.props().navigation.push).toHaveBeenCalledWith("LoggedRoutes");
  });
  /*
    Tentar acessar com dados inválidos
    Dado que o usuário inseriu CPF e/ou SENHA não encontrados no banco de dados,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20272
  */
  it("Tentar acessar com dados inválidos", async () => {
    const wrapper = mount(<LoginScreen />);
    wrapper.setState({status: ServiceStatus.exception});

    const warningMessage = wrapper.find(LoginScreenInputPassword).find(Text).at(1);

    expect(warningMessage.text()).toEqual(LoginScreenInputPasswordConst.exceptionText);
  });
  /*
    Erro ao acessar
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN, mas o aplicativo encontrou um erro interno ou de conexão para realizar a verificação,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1076%3A220
   */
  it("Erro ao acessar", async () => {
    const wrapper = mount(<LoginScreen />);

    wrapper.setState({status: ServiceStatus.noInternetConnection});

    const warningMessage = wrapper.find(LoginScreenInputPassword).find(Text).at(1);

    expect(warningMessage.text()).toEqual(LoginScreenInputPasswordConst.noInternetConnectionText);
  });
});
