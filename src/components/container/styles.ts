import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ContainerStyle = {
  View: styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
  `,
  KeyboardAvoidingView: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  ScrollView: styled.ScrollView.attrs(() => ({
    contentContainerStyle: `
      height: 100%
    `,
  }))``,
  ContentView: styled.View<{marginBottom?: number}>`
    flex: 1;
    background-color: ${Colors.black};
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
  `,
  FooterView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
};
