import React from "react";
import {HomeScreenSubjectsListConst} from "./const";
import {HomeScreenSubjectsListStyles} from "./styles";

export class HomeScreenHelloText extends React.PureComponent {
  render = () => {
    const {hiText, newsMessageFirstText, newsMessageSecondText} = HomeScreenSubjectsListConst;
    const {View, HiText, NewsText} = HomeScreenSubjectsListStyles;

    return (
      <View>
        <HiText>{hiText("Teste")}</HiText>
        <NewsText>{newsMessageFirstText}</NewsText>
        <NewsText>{newsMessageSecondText}</NewsText>
      </View>
    );
  };
}
