import {HomeScreenProps} from "../model/home-screen-props";

export enum HomeScreenActionConst {}

export interface HomeScreenActionType {
  type?: HomeScreenActionConst;
  payload?: HomeScreenProps;
}

export class HomeScreenAction {}
