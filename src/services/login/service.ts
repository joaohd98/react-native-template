import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {LoginRequestModel} from "./request";
import {LoginResponseModel} from "./response";

export const loginUserService = async (request: LoginRequestModel): Promise<ServiceResponse<LoginResponseModel>> => {
  const headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    Service.makePostRequest<LoginResponseModel>(URL.login, request.getRequest(), headers).then(
      response => resolve({data: new LoginResponseModel(response.data!)}),
      error => reject(error)
    );
  });
};
