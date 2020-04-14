import {HomeScreenProps} from "../model/home-screen-props";
import {HomeScreenAction, HomeScreenActionConst, HomeScreenActionType} from "./home-screen-action";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";

export const HomeScreenInitialState: HomeScreenProps = {
  name: "",
  selectedDate: new MomentController(),
  status: ServiceStatus.loading,
  functions: {
    getSubjects: (rmCpf, date) => HomeScreenAction.getSubjects(rmCpf, date),
  },
};

export const HomeScreenReducer = (state = HomeScreenInitialState, action: HomeScreenActionType): HomeScreenProps => {
  switch (action.type) {
    case HomeScreenActionConst.FETCH_SUBJECT: {
      return {
        ...state,
        status: ServiceStatus.loading,
      };
    }

    case HomeScreenActionConst.RECEIVE_SUBJECT: {
      return {
        ...state,
        status: action.payload?.status!,
        subjectDay: action.payload?.subjectDay!,
      };
    }

    default:
      return state;
  }
};
