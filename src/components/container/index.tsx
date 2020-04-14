import React from "react";
import {ContainerStyle} from "./styles";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  footerContent?: JSX.Element | JSX.Element[];
}

export class Container extends React.Component<Props> {

  getFooterContent = () => {
    const {FooterView} = ContainerStyle;
    const {footerContent} = this.props;

    return footerContent && <FooterView>{footerContent}</FooterView>;
  };

  render = () => {
    const {SafeAreaView, ScrollView, ContentView} = ContainerStyle;
    const {children} = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          <ContentView>{children}</ContentView>
        </ScrollView>
        {this.getFooterContent()}
      </SafeAreaView>
    );
  };
}
