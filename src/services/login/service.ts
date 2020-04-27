import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {LoginRequestModel} from "./request";
import {LoginResponseModel} from "./response";

type PromiseType = Promise<ServiceResponse<LoginResponseModel>>;

export const loginUserService = async (usuario: string, senha: string): PromiseType => {
  const request = new LoginRequestModel({usuario, senha});

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
