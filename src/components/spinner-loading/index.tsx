import React from "react";
import {CustomImg} from "../../assets/images";
import {Animated, Easing} from "react-native";

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

interface State {
  rotateValue: Animated.Value;
}

export class SpinnerLoading extends React.Component<Props, State> {
  state = {
    rotateValue: new Animated.Value(0),
  };

  componentDidMount() {
    this.startRotateAnimation();
  }

  startRotateAnimation() {
    Animated.timing(this.state.rotateValue, {
      toValue: 1,
      duration: 750,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.state.rotateValue.setValue(0);
      this.startRotateAnimation();
    });
  }

  render = () => {
    const {color, width, height} = this.props;
    const {rotateValue} = this.state;

    const spin = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <Animated.View style={{width, height, transform: [{rotate: spin}]}}>
        <CustomImg.Loading height={height} width={width} stroke={color} />
      </Animated.View>
    );
  };
}
