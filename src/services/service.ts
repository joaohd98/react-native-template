import {ServiceResponse, ServiceStatus, ServiceStatusException} from "./model";
import axios from "axios";
import {Helpers} from "../helpers/helpers";

export class Service {
  protected static makeGetRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string},
    headers: HeadersInit_ = {}
  ): Promise<ServiceResponse<ResponseType>> => Service.makeRequest<ResponseType>(url, "get", headers, params);

  protected static makePostRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string},
    headers: HeadersInit_ = {}
  ): Promise<ServiceResponse<ResponseType>> => Service.makeRequest<ResponseType>(url, "post", headers, params);

  private static makeRequest = async <ResponseType>(
    url: string,
    method: "post" | "get",
    headers: HeadersInit_,
    value: {}
  ): Promise<ServiceResponse<ResponseType>> => {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data: method === "post" ? value : {},
        params: method === "get" ? value : {},
      });

      return {
        status: ServiceStatus.success,
        data: response.data,
      };
    } catch {
      throw new ServiceStatusException(
        (await Helpers.hasConnection()) ? ServiceStatus.exception : ServiceStatus.noInternetConnection
      );
    }
  };
}
