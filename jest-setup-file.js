const mockAsyncStorage = require("@react-native-community/async-storage/jest/async-storage-mock");
const mockRNCNetInfoMock = require("@react-native-community/netinfo/jest/netinfo-mock");

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfoMock);
jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);
