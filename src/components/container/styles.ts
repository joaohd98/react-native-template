import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ContainerStyle = {
  KeyboardAvoidingView: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  SafeAreaView: styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.black};
  `,
  ScrollView: styled.ScrollView.attrs(() => ({
    contentContainerStyle: `
      flex-grow: 1;
      background-color: ${Colors.black};
    `,
  }))`
    flex: 1;
    background-color: ${Colors.black};
  `,
  ContentView: styled.View`
    flex-grow: 1;
    background-color: ${Colors.black};
  `,
  FooterView: styled.View<{bottom?: number}>`
    position: absolute;
    bottom: ${props => (props.bottom ? props.bottom : 0)};
    width: 100%;
  `,
};
