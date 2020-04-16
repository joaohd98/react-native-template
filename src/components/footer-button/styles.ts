import styled from "styled-components/native";
import {Fonts} from "../../theme/fonts";
import {Colors} from "../../theme/colors";
import LinearGradient from "react-native-linear-gradient";

export const FooterButtonStyles = {
  TouchableOpacity: styled.TouchableOpacity``,
  LinearGradient: styled(LinearGradient)`
    padding-vertical: 22px;
    height: 65px;
    align-items: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  `,
  Text: styled.Text<{isEnabled: boolean}>`
    font-family: ${Fonts.gotham.bold};
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.03px;
    text-transform: uppercase;
    color: ${props => (props.isEnabled ? Colors.black : Colors.disabled)};
  `,
};
