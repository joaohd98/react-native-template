import styled from "styled-components/native";
import {Fonts} from "../../theme/fonts";
import {Colors} from "../../theme/colors";
import LinearGradient from "react-native-linear-gradient";

export const FooterButtonStyles = {
  TouchableOpacity: styled.TouchableOpacity`
    margin-horizontal: 20%;
  `,
  LinearGradient: styled(LinearGradient)`
    border-radius: 100px;
    padding-vertical: 22px;
    box-shadow: 0 2px 12px ${Colors.shadow};
  `,
  Text: styled.Text`
    font-family: ${Fonts.gotham.bold};
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.03px;
    text-transform: uppercase;
    color: ${Colors.black};
  `,
};
