/**
 * @format
 */
import "react-native-gesture-handler";
import {AppRegistry} from "react-native";
import {name as appName} from "./app.json";
import {Layout} from "./src/layout";

AppRegistry.registerComponent(appName, () => Layout);
