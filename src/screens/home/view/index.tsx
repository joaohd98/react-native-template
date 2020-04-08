import React from "react";
import {connect} from "react-redux";
import {Container} from "../../../components/container";
import {HomeScreenHelloText} from "./components/hello-text";
import {HomeScreenSubjectsList} from "./components/subjects-list";
import {HomeScreenHeader} from "./components/header";
import {HomeScreenProps} from "./model/home-screen-props";
import {HomeScreenState} from "./model/home-screen-state";
import {StatesReducers} from "../../../redux/reducers";

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  componentDidMount() {
    HomeScreenHeader(this.props.navigation!);
  }

  render = () => {
    const {name} = this.props;

    return (
      <Container>
        <HomeScreenHelloText name={name} />
        <HomeScreenSubjectsList />
      </Container>
    );
  };
}

const mapStateToProps = (state: StatesReducers): HomeScreenProps => ({
  name: state.loginScreenReducer.name,
  ...state.homeScreenReducer,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   functions: bindActionCreators(LoginInitialState.functions!, dispatch),
// });

export const HomeConnectedScreen = connect(mapStateToProps, null)(HomeScreen);
