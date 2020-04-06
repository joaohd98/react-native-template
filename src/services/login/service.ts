import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {LoginRequestModel} from "./request";
import {LoginResponseModel} from "./response";

export class LoginService extends Service {
  static loginUser = async (request: LoginRequestModel): Promise<ServiceResponse<LoginResponseModel>> =>
    await LoginService.makePostRequest<LoginResponseModel>(
      URL.login,
      request.getRequest(),
      new Headers({
        "accept": "application/json",
        "Content-Type": "application/json",
      })
    );
}
