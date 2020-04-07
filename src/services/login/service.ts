import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {LoginRequestModel} from "./request";
import {LoginResponseModel} from "./response";

export class LoginService extends Service {
  static loginUser = async (request: LoginRequestModel): Promise<ServiceResponse<LoginResponseModel>> => {
    const headers = new Headers({
      "accept": "application/json",
      "Content-Type": "application/json",
    });

    return new Promise((resolve, reject) => {
      LoginService.makePostRequest<LoginResponseModel>(URL.login, request.getRequest(), headers).then(
        response => resolve({...response, data: new LoginResponseModel(response.data!)}),
        error => reject(error)
      );
    });
  };
}
