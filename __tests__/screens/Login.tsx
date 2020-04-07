import "react-native";
import React from "react";
import {mount} from "enzyme";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LoginScreen from "../..//src/screens/login/view";

describe("LoginScreen", async () => {
  it("renders correctly", async () => {
    renderer.create(<LoginScreen />);
  });
  /*
   * BDD Description
   */
  it("renders correctly", async () => {
    const app = mount(<LoginScreen />);
    const text = app.find("Text").at(0).text();
    expect(text).toEqual("Aluno");
  });
});
