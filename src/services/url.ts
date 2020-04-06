import Config from "react-native-config";

const getUrl = (path: string) => Config.API_URL + path;

export const URL = {
  login: getUrl("Logon/Logar"),
};
