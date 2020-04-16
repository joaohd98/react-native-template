import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ContainerStyle = {
  View: styled.View<{backgroundColor?: string}>`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : Colors.black)};
  `,
  KeyboardAvoidingView: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  ScrollView: styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      flexGrow: 1,
    },
  }))``,
  ContentView: styled.View<{marginBottom?: number; backgroundColor?: string}>`
    flex: 1;
    padding-bottom: 25px;
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : Colors.black)};
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
  `,
  FooterView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
};
