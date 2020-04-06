import NetInfo from "@react-native-community/netinfo";

export class Helpers {
  static hasConnection = async (): Promise<boolean> => (await NetInfo.fetch()).isConnected;
}
