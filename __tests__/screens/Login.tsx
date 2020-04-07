import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LoginScreen from "../..//src/screens/login/view";

describe("LoginScreen", async () => {
  it("renders correctly", async () => {
    renderer.create(<LoginScreen />);
  });

});
