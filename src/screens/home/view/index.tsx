import React from "react";
import {connect} from "react-redux";
import {Container} from "../../../components/container";
import {HomeScreenHelloText} from "./components/hello-text";
import {HomeScreenSubjectsList} from "./components/subjects-list";
import {setHomeScreenHeader} from "./components/header";
import {HomeScreenProps} from "./model/home-screen-props";
import {HomeScreenState} from "./model/home-screen-state";
import {StatesReducers} from "../../../redux/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {HomeScreenInitialState} from "./redux/home-screen-reducer";

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  componentDidMount() {
    setHomeScreenHeader(this.props);
    this.getSubjectDay();
  }

  getSubjectDay = () => {
    const {functions, rmCpf, selectedDate} = this.props;
    functions.getSubjects(rmCpf!, selectedDate!);
  };

  render = () => {
    const {name, status, subjectDay, selectedDate} = this.props;

    return (
      <Container>
        <HomeScreenHelloText name={name!} />
        <HomeScreenSubjectsList
          status={status}
          onTryAgain={this.getSubjectDay}
          subjectDay={subjectDay!}
          selectedDate={selectedDate!}
        />
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
