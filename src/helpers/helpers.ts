import NetInfo from "@react-native-community/netinfo";

export class Helpers {
  static hasConnection = async (): Promise<boolean> => {
    const fetch = await NetInfo.fetch();
    return fetch.isConnected;
  };

  static getFirstNameFormatted = (name: string) => {
    const firstName = name.split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
  };
}
