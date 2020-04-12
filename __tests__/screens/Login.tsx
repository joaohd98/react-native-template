import "react-native";
import React from "react";
import {mount} from "enzyme";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LoginScreen from "../..//src/screens/login/view";

describe("LoginScreen", async () => {
  it("renders correctly", async () => {
    renderer.create(<LoginScreen />);
  });
  /*
   Primeira ação: Ativar campo CPF
    Dado que o usuário está na tela de login de responsável e toca primeiro no campo CPF,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato numérico,
    E, acima do teclado, o botão PRÓXIMO deve ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1026%3A695

    Primeira ação: Ativar campo SENHA
    Dado que o usuário está na tela de login de responsável e toca primeiro no campo SENHA,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato padrão,
    E, acima do teclado, o botão PRÓXIMO deve ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=3713%3A0

    Segunda ação: Ativar campo CPF
    Dado que o usuário está na tela de login de responsável, já preencheu o campo SENHA e toca no campo CPF ou no botão PRÓXIMO,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato numérico,
    E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=3714%3A180

    Segunda ação: Ativar campo SENHA
    Dado que o usuário está na tela de login de responsável, já preencheu o campo CPF e toca no campo SENHA ou no botão PRÓXIMO,
    Então o campo deve ser exibido em seu estado focus,
    E o teclado do dispositivo deve ser trazido em formato padrão,
    E, acima do teclado, o botão de FAZER LOGIN deve ser ser exibido, em seu estado desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17939

    Inserir número no formato completo de CPF
    Dado que o usuário está com o campo CPF ativo e insere um número no formato correto,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A17850
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18119

    Inserir número no formato incompleto de CPF
    Dado que o usuário está com o campo CPF ativo e insere um número incompleto em relação ao formato de CPFs,
    Então o botão de próxima etapa deve permanecer desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1044%3A18697

    Inserir senha
    Dado que o usuário está com o campo de SENHA ativo e insere qualquer dado nele,
    Então o botão de próxima etapa deve ser habilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18029
    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1029%3A18429

    Aguardar retorno da validação dos dados
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN,
    Então, até que o retorno da validação seja recebido, o botão deve ser exibido em seu estado loading,
    E os campos devem ser desabilitados,
    E o botão de voltar deve ser desabilitado,
    E o botão Esqueci minha senha deve ser desabilitado.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20241

    Acessar com dados válidos
    Dado que o usuário inseriu CPF e SENHA encontrados e validados no banco de dados,
    Então o aplicativo deve direcioná-lo à tela inicial do aplicativo, na visão do responsável.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1105%3A23050

    Tentar acessar com dados inválidos
    Dado que o usuário inseriu CPF e/ou SENHA não encontrados no banco de dados,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1063%3A20272

    Erro ao acessar
    Dado que o usuário inseriu um CPF no formato válido, algum dado no campo senha e tocou no botão FAZER LOGIN, mas o aplicativo encontrou um erro interno ou de conexão para realizar a verificação,
    Então deve ser exibida uma mensagem de erro na tela.

    https://www.figma.com/file/qW7CUV0P9VwW2Q8tay9c5f/App?node-id=1076%3A220
   */
  it("renders correctly", async () => {
    const app = mount(<LoginScreen />);
    const text = app.find("Text").at(0).text();
    expect(text).toEqual("Aluno");
  });
});
