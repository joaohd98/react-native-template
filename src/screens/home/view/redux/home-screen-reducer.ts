import {HomeScreenProps} from "../model/home-screen-props";
import {HomeScreenActionType} from "./home-screen-action";
import {MomentController} from "../../../../helpers/moment.js";
import {ServiceStatus} from "../../../../services/model";

export const HomeScreenInitialState: HomeScreenProps = {
  name: "",
  subjects: [],
  selectedDate: new MomentController(),
  status: ServiceStatus.loading,
};

export const HomeScreenReducer = (state = HomeScreenInitialState, action: HomeScreenActionType): HomeScreenProps => {
  switch (action.type) {
    default:
      return state;
  }
};
