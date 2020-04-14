import {Fonts} from "../../theme/fonts";
import {Colors} from "../../theme/colors";
import styled from "styled-components/native";

export const TryAgainStyles = {
  Container: styled.View`
    background: rgba(255, 255, 255, 0.14);
    border-radius: 4px;
    padding: 20px 15px;
  `,
  TitleView: styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 15px;
    justify-content: center;
  `,
  TitleText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
    margin-left: 10px;
    color: ${Colors.white};
  `,
  MessageText: styled.Text`
    font-family: ${Fonts.roboto.thin};
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: ${Colors.white};
  `,
  ButtonTouchableOpacity: styled.TouchableOpacity`
    margin-top: 25px;
    background: rgba(255, 255, 255, 0.1);
    padding-vertical: 15px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  `,
  ButtonText: styled.Text`
    font-family: ${Fonts.gotham.bold};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.03px;
    text-transform: uppercase;
    color: ${Colors.primary};
  `,
};
