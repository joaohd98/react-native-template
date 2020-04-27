import {HomeScreenProps} from "../model/home-screen-props";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";
import {Services} from "../../../../services/url";

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

    Services.getSubjectsDay(rm, date).then(
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
