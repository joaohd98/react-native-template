import {HomeScreenProps} from "../model/home-screen-props";
import {MomentController} from "../../../../helpers/moment-controller";
import {getSubjectsService} from "../../../../services/subjects-day/service";
import {SubjectsDayRequestModel} from "../../../../services/subjects-day/request";
import {ServiceStatus} from "../../../../services/model";

export enum HomeScreenActionConst {
  FETCH_SUBJECT = "HomeScreenActionConst@FETCH_SUBJECT",
  RECEIVE_SUBJECT = "HomeScreenActionConst@RECEIVE_SUBJECT",
}

export interface HomeScreenActionType {
  type?: HomeScreenActionConst;
  payload?: HomeScreenProps;
}

export class HomeScreenAction {
  static getSubjects = (rm: string, date: MomentController) => dispatch => {
    dispatch({type: HomeScreenActionConst.FETCH_SUBJECT});

    getSubjectsService(new SubjectsDayRequestModel({rm, date})).then(
      response =>
        dispatch({
          type: HomeScreenActionConst.RECEIVE_SUBJECT,
          payload: {
            status: ServiceStatus.success,
            subjectDay: response.data!,
          },
        }),
      ({message}) => dispatch({type: HomeScreenActionConst.RECEIVE_SUBJECT, payload: {status: message}})
    );
  };
}
