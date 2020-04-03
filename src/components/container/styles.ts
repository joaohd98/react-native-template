import styled from "styled-components/native";
import {Colors} from "../../theme/colors";

export const ContainerStyle = {
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
  FooterView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
};
