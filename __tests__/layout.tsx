/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import {Layout} from "../src/layout";

it("layout render correctly", async () => {
  renderer.create(<Layout />);
});
