import {LoginScreenProps} from "../model/login-screen-props";

export enum LoginScreenActionConst {}

export interface LoginScreenActionType {
  type?: LoginScreenActionConst;
  payload?: LoginScreenProps;
}

export class LoginScreenAction {}
