import React from "react";
import {TryAgainStyles} from "./styles";
import {TryAgainConst} from "./const";
import {CustomImg} from "../../assets/images";
import {ViewStyle} from "react-native";

interface Props {
  style?: ViewStyle;
  message: string;
  onPress: () => void;
}

export class TryAgain extends React.Component<Props> {
  render = () => {
    const {message, onPress, style} = this.props;
    const {oops, buttonText} = TryAgainConst;
    const {Container, TitleView, TitleText, MessageText, ButtonTouchableOpacity, ButtonText} = TryAgainStyles;

    return (
      <Container style={style}>
        <TitleView>
          <CustomImg.Warning height={18} width={22} />
          <TitleText>{oops}</TitleText>
        </TitleView>
        <MessageText>{message}</MessageText>
        <ButtonTouchableOpacity activeOpacity={0.7} onPress={() => onPress()}>
          <ButtonText>{buttonText}</ButtonText>
        </ButtonTouchableOpacity>
      </Container>
    );
  };
}
