import Config from "react-native-config";
import {loginUserService} from "./login/service";
import {getSubjectsService} from "./subjects-day/service";

const getUrl = (path: string) => Config.API_URL + path;

export const URL = {
  login: getUrl("Logon/Logar"),
  subjectsDay: getUrl("Calendario/ListarMateriasDia"),
};

export const Services = {
  login: loginUserService,
  getSubjectsDay: getSubjectsService,
};
