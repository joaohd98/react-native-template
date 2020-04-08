import {HomeScreenProps} from "../model/home-screen-props";
import {HomeScreenActionType} from "./home-screen-action";

export const HomeScreenInitialState: HomeScreenProps = {
  subjects: [],
};

export const HomeScreenReducer = (state = HomeScreenInitialState, action: HomeScreenActionType): HomeScreenProps => {
  switch (action.type) {
    default:
      return state;
  }
};
