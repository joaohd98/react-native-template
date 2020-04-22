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

describe("LoginScreen", () => {
  it("renders correctly", async () => {
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
  // it("Ativar campo senha", async () => {
  //   const wrapper = mount(<LoginScreen />);
  //   wrapper.find(LoginScreenInputPassword).find(TextInput).props().onFocus();
  //   wrapper.update();
  //
  //   const raCPf = wrapper.find(LoginScreenInputPassword);
  //   const formFooter = wrapper.find(LoginScreenFormFooter);
  //   const footerButton = formFooter.find(FooterButton);
  //
  //   expect(raCPf.props().input.isFocused).toBeTruthy();
  //   expect(raCPf.props().input.keyboardType).toEqual("default");
  //   expect(footerButton.props().text).toEqual("PRÓXIMO");
  //   expect(footerButton.props().isEnabled).toBeFalsy();
  // });
  /*
   Segunda ação: Campo RM preenchido
   Dado que o usuário está na tela de login de responsável, já preencheu o campo CPF e toca no campo SENHA ou no botão PRÓXIMO,
   Então o campo deve ser exibido em seu estado focus,
   E o teclado do dispositivo deve ser trazido em formato padrão,
   E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.
   https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17939
 */
  // it("Campo RM Preencido", async () => {
  //   const wrapper = mount(<LoginScreen />);
  //
  //   let raCPf = wrapper.find(LoginScreenInputRaCpf);
  //   let password = wrapper.find(LoginScreenInputPassword);
  //   let formFooter = wrapper.find(LoginScreenFormFooter);
  //   let footerButton = formFooter.find(FooterButton);
  //
  //   raCPf.find(TextInput).props().onFocus();
  //   raCPf.find(TextInput).props().onChangeText("12345");
  //   password.find(TextInput).instance().focus();
  //   wrapper.update();
  //
  //   raCPf = wrapper.find(LoginScreenInputRaCpf);
  //   password = wrapper.find(LoginScreenInputPassword);
  //   formFooter = wrapper.find(LoginScreenFormFooter);
  //   footerButton = formFooter.find(FooterButton);
  //
  //   console.log(raCPf.props());
  //   console.log(password.props());
  //   console.log(formFooter.props());
  //   console.log(footerButton.props());
  //   console.log(footerButton.find(TouchableOpacity).props().onPress);
  //
  //   expect(raCPf.props().input.isFocused).toBeFalsy();
  //   expect(password.props().input.isFocused).toBeTruthy();
  //   expect(password.props().input.keyboardType).toEqual("default");
  //   expect(footerButton.props().text).toEqual("FAZER LOGIN");
  //   expect(footerButton.props().isEnabled).toBeFalsy();
  // });
  /*
    Segunda ação: campo RM preenchido
    Dado que o usuário está na tela de login de responsável, já preencheu o campo SENHA e toca no campo CPF ou no botão PRÓXIMO,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato numérico,
    E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=3714%3A180
  */
  /*
    Inserir número no formato completo de CPF
    Dado que o usuário está com o campo CPF ativo e insere um número no formato correto,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17850
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18119
  */

  /*
    Inserir número no formato incompleto de CPF
    Dado que o usuário está com o campo CPF ativo e insere um número incompleto em relação ao formato de CPFs,
    Então o botão de próxima etapa deve permanecer desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1044%3A18697
  */

  /*
    Inserir senha
    Dado que o usuário está com o campo de SENHA ativo e insere qualquer dado nele,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18029
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18429
  */

  /*
    Aguardar retorno da validação dos dados
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN,
    Então, até que o retorno da validação seja recebido, o botão deve ser exibido em seu estado loading,
    E os campos devem ser desabilitados,
    E o botão de voltar deve ser desabilitado,
    E o botão Esqueci minha senha deve ser desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20241
  */

  /*
    Acessar com dados válidos
    Dado que o usuário inseriu CPF e SENHA encontrados e validados no banco de dados,
    Então o aplicativo deve direcioná-lo à tela inicial do aplicativo, na visão do responsável.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1105%3A23050
  */

  /*
    Tentar acessar com dados inválidos
    Dado que o usuário inseriu CPF e/ou SENHA não encontrados no banco de dados,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20272
  */

  /*
    Erro ao acessar
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN, mas o aplicativo encontrou um erro interno ou de conexão para realizar a verificação,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1076%3A220
   */
});
