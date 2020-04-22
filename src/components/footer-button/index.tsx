import React from "react";
import {FooterButtonStyles} from "./styles";
import {Colors} from "../../theme/colors";
import {ServiceStatus} from "../../services/model";
import {SpinnerLoading} from "../spinner-loading";

interface Props {
  text: string;
  isEnabled: boolean;
  onPress: () => void;
  status?: ServiceStatus;
}

export class FooterButton extends React.Component<Props> {
  getContent = () => {
    const {Text} = FooterButtonStyles;
    const {status, text, isEnabled} = this.props;

    if (status === ServiceStatus.loading) {
      return <SpinnerLoading color={Colors.black} width={25} height={25} />;
    }

    return <Text isEnabled={isEnabled}>{text}</Text>;
  };

  checkCanSubmit = () => {
    const {isEnabled, status} = this.props;
    return !isEnabled || [ServiceStatus.success, ServiceStatus.loading].find(accept => accept === status) !== undefined;
  };

  render = () => {
    const {TouchableOpacity, LinearGradient} = FooterButtonStyles;
    const {onPress} = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} disabled={this.checkCanSubmit()} onPress={onPress}>
        <LinearGradient colors={[Colors.primary, Colors.primaryGradient]} angle={180}>
          {this.getContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
}
