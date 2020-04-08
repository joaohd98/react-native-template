import styled from "styled-components/native";
import {Fonts} from "../../../../../theme/fonts";
import {Colors} from "../../../../../theme/colors";

export const HomeScreenSubjectsListStyles = {
  View: styled.View`
    margin-vertical: 50px;
  `,
  HiText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 30px;
    line-height: 39px;
    text-align: center;
    color: ${Colors.lightMedium};
    margin-bottom: 20px;
  `,
  NewsText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 21px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.01px;
    color: ${Colors.lightMedium};
  `,
};
