import {Service} from "../service";
import {ServiceResponse} from "../model";
import {URL} from "../url";
import {SubjectsDayRequestModel} from "./request";
import {SubjectsDayResponseModel} from "./response";

export class SubjectsDayService extends Service {
  static getSubjects = async (request: SubjectsDayRequestModel): Promise<ServiceResponse<SubjectsDayResponseModel>> => {
    const headers = new Headers({
      "accept": "application/json",
      "Content-Type": "application/json",
    });

    return new Promise((resolve, reject) => {
      SubjectsDayService.makeGetRequest<SubjectsDayResponseModel>(URL.subjectsDay, request.getRequest(), headers).then(
        response => resolve({data: new SubjectsDayResponseModel(response.data!)}),
        error => reject(error)
      );
    });
  };
}
