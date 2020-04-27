import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {SubjectsDayRequestModel} from "./request";
import {SubjectsDayResponseModel} from "./response";
import {MomentController} from "../../helpers/moment-controller";

type PromiseType = Promise<ServiceResponse<SubjectsDayResponseModel>>;

export const getSubjectsService = async (rm: string, date: MomentController): PromiseType => {
  const request = new SubjectsDayRequestModel({rm, date});

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
