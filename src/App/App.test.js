import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("should render", () => {
  render(<App />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
