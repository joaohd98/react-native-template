import {HomeScreenProps} from "../model/home-screen-props";
import {HomeScreenActionConst, HomeScreenActionType} from "./home-screen-action";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";

export const HomeScreenInitialState: HomeScreenProps = {
  name: "",
  subjects: [],
  selectedDate: new MomentController(),
  status: ServiceStatus.loading,
};

export const HomeScreenReducer = (state = HomeScreenInitialState, action: HomeScreenActionType): HomeScreenProps => {
  switch (action.type) {
    case HomeScreenActionConst.FETCH_SUBJECT: {
      return state;
    }

    case HomeScreenActionConst.LOADING_SUBJECT: {
      return state;
    }

    case HomeScreenActionConst.RECEIVE_SUBJECT: {
      return state;
    }

    default:
      return state;
  }
};
