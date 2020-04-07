import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const mockAsyncStorage = require("@react-native-community/async-storage/jest/async-storage-mock");
const mockRNCNetInfoMock = require("@react-native-community/netinfo/jest/netinfo-mock");

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfoMock);
jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);

configure({adapter: new Adapter()});
