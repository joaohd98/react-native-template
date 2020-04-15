import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {SubjectsDayRequestModel} from "./request";
import {SubjectsDayResponseModel} from "./response";

type PromiseType = Promise<ServiceResponse<SubjectsDayResponseModel>>;

export const getSubjectsService = async (request: SubjectsDayRequestModel): PromiseType => {
  const headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    Service.makeGetRequest<SubjectsDayResponseModel>(URL.subjectsDay, request.getRequest(), headers).then(
      response => resolve({data: new SubjectsDayResponseModel(response.data!)}),
      error => reject(error)
    );
  });
};
