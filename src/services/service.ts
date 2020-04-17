import {ServiceResponse, ServiceStatus, ServiceStatusException} from "./model";
import axios from "axios";
import {Helpers} from "../helpers/helpers";

export class Service {
  static makeGetRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string} = {},
    headers: {[key: string]: string} = {}
  ): Promise<ServiceResponse<ResponseType>> => Service.makeRequest<ResponseType>(url, "get", headers, params);

  static makePostRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string} = {},
    headers: {[key: string]: string} = {}
  ): Promise<ServiceResponse<ResponseType>> => Service.makeRequest<ResponseType>(url, "post", headers, params);

  private static makeRequest = async <ResponseType>(
    url: string,
    method: "post" | "get",
    headers: {[key: string]: string},
    value: {}
  ): Promise<ServiceResponse<ResponseType>> => {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data: method === "post" ? value : null,
        params: method === "get" ? value : null,
      });

      return {
        data: response.data,
      };
    } catch {
      throw new ServiceStatusException(
        (await Helpers.hasConnection()) ? ServiceStatus.exception : ServiceStatus.noInternetConnection
      );
    }
  };
}
