import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import SearchBar from "../SearchBar";

test("renders content", () => {
  const component = render(<SearchBar />);
});