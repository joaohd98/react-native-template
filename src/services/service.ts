import {ServiceResponse, ServiceStatus, ServiceStatusException} from "./model";
import axios from "axios";
import {Helpers} from "../helpers/helpers";

export class Service {
  protected static makeGetRequest = async <Response>(
    url: string,
    params: {[key: string]: string},
    headers: HeadersInit_ = {}
  ): Promise<ServiceResponse<Response>> => Service.makeRequest<Response>(url, "get", headers, params);

  protected static makePostRequest = async <Response>(
    url: string,
    params: {[key: string]: string},
    headers: HeadersInit_ = {}
  ): Promise<ServiceResponse<Response>> => Service.makeRequest<Response>(url, "post", headers, params);

  private static makeRequest = async <Response>(
    url: string,
    method: "post" | "get",
    headers: HeadersInit_,
    data: {}
  ): Promise<ServiceResponse<Response>> => {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data,
      });

      let res = response.data;

      if (Array.isArray(res)) {
        res.forEach(element => new Response(element));
      } else {
        res = new Response(res);
      }

      return {
        status: ServiceStatus.success,
        response: res,
      };
    } catch {
      throw new ServiceStatusException(
        (await Helpers.hasConnection()) ? ServiceStatus.exception : ServiceStatus.noInternetConnection
      );
    }
  };
}
