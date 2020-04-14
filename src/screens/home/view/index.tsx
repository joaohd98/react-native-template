import React from "react";
import {connect} from "react-redux";
import {Container} from "../../../components/container";
import {HomeScreenHelloText} from "./components/hello-text";
import {HomeScreenSubjectsList} from "./components/subjects-list";
import {HomeScreenHeader} from "./components/header";
import {HomeScreenProps} from "./model/home-screen-props";
import {HomeScreenState} from "./model/home-screen-state";
import {StatesReducers} from "../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {HomeScreenInitialState} from "./redux/home-screen-reducer";

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  componentDidMount() {
    const {navigation, functions, rmCpf, selectedDate} = this.props;

    HomeScreenHeader(navigation!);
    functions.getSubjects(rmCpf!, selectedDate!);
  }

  render = () => {
    const {name, status} = this.props;

    return (
      <Container>
        <HomeScreenHelloText name={name!} />
        <HomeScreenSubjectsList status={status} />
      </Container>
    );
  };
}

const mapStateToProps = (state: StatesReducers): HomeScreenProps => ({
  ...state.homeScreenReducer,
  rmCpf: state.loginScreenReducer.rmCpf,
  name: state.loginScreenReducer.name,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  functions: bindActionCreators(HomeScreenInitialState.functions!, dispatch),
});

export const HomeConnectedScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
