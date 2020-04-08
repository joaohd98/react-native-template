import React from "react";
import {Container} from "../../../components/container";
import {HomeScreenHelloText} from "./components/hello-text";
import {HomeScreenSubjectsList} from "./components/subjects-list";
import {HomeScreenHeader} from "./components/header";
import {HomeScreenProps} from "./model/home-screen-props";
import {HomeScreenState} from "./model/home-screen-state";

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  componentDidMount() {
    HomeScreenHeader(this.props.navigation);
  }

  render = () => (
    <Container>
      <HomeScreenHelloText />
      <HomeScreenSubjectsList />
    </Container>
  );
}
