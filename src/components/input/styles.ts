import styled from "styled-components/native";
import {Fonts} from "../../theme/fonts";
import {Colors} from "../../theme/colors";

export const InputComponentStyle = {
  View: styled.View`
    margin-vertical: 30px;
  `,
  Label: styled.Text`
    font-family: ${Fonts.gotham.medium};
    line-height: 16px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.lightBold};
    margin-bottom: 15px;
  `,
  Input: styled.TextInput`
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.lightMedium};
    color: ${Colors.lightMedium};
    margin-horizontal: 7.5%;
    text-align: center;
    font-size: 20px;
    padding: 5px 5px 15px 5px;
  `,
};
