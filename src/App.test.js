import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Components/Layout/View", () => {
  return { Layout: jest.fn(() => <div>Layout</div>) };
});

test("renders Pokemon background", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokémon/i);
  expect(linkElement).toBeTruthy();
});
