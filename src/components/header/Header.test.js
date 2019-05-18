import { shallow } from "enzyme";
import React from "react";
import { Header } from "./Header";

// snapshot test

it("expect render Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
