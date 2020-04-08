import React from "react";
import {HomeScreenSubjectsListConst} from "./const";
import {HomeScreenSubjectsListStyles} from "./styles";
import {Helpers} from "../../../../../helpers/helpers";

interface Props {
  name: string;
}

export class HomeScreenHelloText extends React.Component<Props> {
  render = () => {
    const {hiText, newsMessageFirstText, newsMessageSecondText} = HomeScreenSubjectsListConst;
    const {View, HiText, NewsText} = HomeScreenSubjectsListStyles;
    const {name} = this.props;

    return (
      <View>
        <HiText>{hiText(Helpers.getFirstNameFormatted(name))}</HiText>
        <NewsText>{newsMessageFirstText}</NewsText>
        <NewsText>{newsMessageSecondText}</NewsText>
      </View>
    );
  };
}
