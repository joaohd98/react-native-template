import React from "react";
import {Container} from "../../../components/container";
import {HomeScreenHelloText} from "./components/hello-text";
import {HomeScreenSubjectsList} from "./components/subjects-list";
import {HomeScreenHeader} from "./components/header";
import {HomeScreenProps} from "./model/home-screen-props";
import {HomeScreenState} from "./model/home-screen-state";
import {Text} from "react-native";

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  componentDidMount() {
    HomeScreenHeader(this.props.navigation);
  }

  render = () => (
    <Container>
      <Text style={{color: "#FFF", fontSize: 20}}>AAA</Text>
      <HomeScreenHelloText />
      <HomeScreenSubjectsList />
    </Container>
  );
}
