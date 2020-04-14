import {HomeScreenProps} from "../model/home-screen-props";
import {MomentController} from "../../../../helpers/moment-controller";
import {SubjectsDayService} from "../../../../services/subjects-day/service";
import {SubjectsDayRequestModel} from "../../../../services/subjects-day/request";

export enum HomeScreenActionConst {
  FETCH_SUBJECT = "HomeScreenActionConst@FETCH_SUBJECT",
  LOADING_SUBJECT = "HomeScreenActionConst@LOADING_SUBJECT",
  RECEIVE_SUBJECT = "HomeScreenActionConst@RECEIVE_SUBJECT",
}

export interface HomeScreenActionType {
  type?: HomeScreenActionConst;
  payload?: HomeScreenProps;
}

export class HomeScreenAction {
  static getSubjects = (rm: string, date: MomentController) => dispatch => {
    dispatch({type: HomeScreenActionConst.LOADING_SUBJECT});

    SubjectsDayService.getSubjects(new SubjectsDayRequestModel({rm, date})).then(
      response =>
        dispatch({
          type: HomeScreenActionConst.RECEIVE_SUBJECT,
          subjects: response.data!,
        }),
      ({message}) => dispatch({type: HomeScreenActionConst.RECEIVE_SUBJECT, status: message})
    );
  };
}
