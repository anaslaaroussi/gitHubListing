import { shallow } from "enzyme";
import React from "react";
import { Loader } from "./Loader";

it("expect render loader component", () => {
  expect(shallow(<Loader />)).toMatchSnapshot();
});
