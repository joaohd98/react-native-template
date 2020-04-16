import React from "react";
import {ContainerStyle} from "./styles";
import {Dimensions, EmitterSubscription, Keyboard, Platform, StatusBar, ViewStyle} from "react-native";

const {height: fullHeight} = Dimensions.get("window");

interface Props {
  style?: ViewStyle;
  children?: JSX.Element[] | JSX.Element;
  footerContent?: JSX.Element | JSX.Element[];
  footerHeight?: number;
  backgroundColor?: string;
  scrollEnabled?: boolean;
  isLoading?: boolean;
}

interface State {
  offset: number;
  marginBottom: number;
}

export class Container extends React.Component<Props, State> {
  state = {
    offset: 0,
    marginBottom: 0,
  };

  listenerShow: EmitterSubscription;
  listenerHide: EmitterSubscription;

  componentDidMount() {
    if (this.props.footerContent !== undefined) {
      this.listenerShow = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
      this.listenerHide = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
    }
  }

  componentWillUnmount() {
    if (this.props.footerContent !== undefined) {
      this.listenerShow.remove();
      this.listenerHide.remove();
    }
  }

  keyboardDidHide = () => {
    this.setState({marginBottom: StatusBar.currentHeight ? StatusBar.currentHeight : 0});
  };

  keyboardDidShow = () => {
    this.setState({marginBottom: 0});
  };

  onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    const offset = fullHeight - height;
    this.setState({offset});
  };

  getFooterContent = () => {
    const {FooterView} = ContainerStyle;
    const {footerContent} = this.props;

    return footerContent && <FooterView>{footerContent}</FooterView>;
  };

  render = () => {
    const {View, KeyboardAvoidingView, ScrollView, ContentView} = ContainerStyle;
    const {children, style, footerContent, footerHeight, isLoading, backgroundColor, scrollEnabled} = this.props;
    const {offset, marginBottom} = this.state;

    return (
      <View
        backgroundColor={backgroundColor}
        pointerEvents={isLoading ? "none" : "auto"}
        onLayout={footerContent !== undefined ? this.onLayout : () => {}}
      >
        <KeyboardAvoidingView
          behavior={Platform.select({ios: "padding", android: undefined})}
          keyboardVerticalOffset={footerContent !== undefined ? offset + marginBottom : 0}
        >
          <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={scrollEnabled ? scrollEnabled : false}>
            <ContentView style={style} backgroundColor={backgroundColor} marginBottom={footerHeight}>
              {children}
            </ContentView>
            {this.getFooterContent()}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  };
}
