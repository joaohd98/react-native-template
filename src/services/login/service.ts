import {Service} from "../service";
import {ServiceResponse} from "../model";
import {LoginRequestModel, LoginResponseModel} from "./model";
import {URL} from "../url";

export class LoginService extends Service {
  static loginUser = async (request: LoginRequestModel): Promise<ServiceResponse<LoginResponseModel>> =>
    await LoginService.makePostRequest<LoginRequestModel, LoginResponseModel>(
      URL.login,
      request.getRequest(),
      new Headers({
        "accept": "application/json",
        "Content-Type": "application/json",
      })
    );
}
