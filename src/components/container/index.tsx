import React from "react";
import {Dimensions, Platform} from "react-native";
import {ContainerStyle} from "./styles";
import {PropsGlobal} from "../../helpers/props-global";

interface Props extends PropsGlobal {
  footerContent?: JSX.Element | JSX.Element[];
}

interface State {
  screenHeight: number;
  height: number;
  heightFooter: number;
}

export class Container extends React.Component<Props, State> {
  state = {
    screenHeight: 0,
    height: Dimensions.get("window").height,
    heightFooter: 0,
  };

  onContentSizeChange = (_contentWidth: number, contentHeight: number) => {
    this.setState({screenHeight: contentHeight});
  };

  onLayoutFooterView = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    this.setState({heightFooter: height});
  };

  getFooterContent = () => {
    const {FooterView} = ContainerStyle;
    const {footerContent} = this.props;
    // const {heightFooter} = this.state;

    return (
      footerContent && (
        <FooterView onLayout={this.onLayoutFooterView} bottom={0}>
          {footerContent}
        </FooterView>
      )
    );
  };

  render = () => {
    const {KeyboardAvoidingView, SafeAreaView, ScrollView, ContentView} = ContainerStyle;
    const {screenHeight, height} = this.state;
    const {children} = this.props;

    const scrollEnabled = screenHeight > height;

    return (
      <KeyboardAvoidingView behavior={Platform.select({ios: "padding", android: undefined})}>
        <SafeAreaView>
          <ScrollView scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
            <ContentView>{children}</ContentView>
          </ScrollView>
          {this.getFooterContent()}
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };
}
