import React from "react";
import {Dimensions} from "react-native";
import {ContainerStyle} from "./styles";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  footerContent?: JSX.Element | JSX.Element[];
}

interface State {
  screenHeight: number;
  height: number;
}

export class Container extends React.Component<Props, State> {
  state = {
    screenHeight: 0,
    height: Dimensions.get("window").height,
  };

  onContentSizeChange = (_contentWidth: number, contentHeight: number) => {
    this.setState({screenHeight: contentHeight});
  };

  getFooterContent = () => {
    const {FooterView} = ContainerStyle;
    const {footerContent} = this.props;

    return footerContent && <FooterView>{footerContent}</FooterView>;
  };

  render = () => {
    const {SafeAreaView, ScrollView, ContentView} = ContainerStyle;
    const {screenHeight, height} = this.state;
    const {children} = this.props;

    const scrollEnabled = screenHeight > height;

    return (
      <SafeAreaView>
        <ScrollView scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
          <ContentView>{children}</ContentView>
        </ScrollView>
        {this.getFooterContent()}
      </SafeAreaView>
    );
  };
}
