import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./View";
import { useQuery } from "@apollo/client";
import { pokemon } from "../../mocks/pokemon";

jest.mock("@apollo/client", () => ({
  useQuery: jest.fn(),
  gql: jest.fn()
}));

describe("hierarchy component", () => {
  const mockUseQuery = useQuery;
  let data = null;
  let error = null;
  let loading = true;

  beforeEach(() => {
    mockUseQuery.mockImplementation(() => {
      return {
        data: data,
        error: error,
        loading: loading
      };
    });
  });
  test("renders Layout", () => {
    const element = render(<Layout />);
    expect(element).toMatchSnapshot();
  });

  test("renders Layout", () => {
    data = null;
    error = "Has a weird error";
    loading = false;
    const element = render(<Layout />);
    expect(element).toMatchSnapshot();
  });

  test("renders Layout", () => {
    data = { pokemons: [pokemon] };
    error = null;
    loading = false;
    const element = render(<Layout />);
    expect(element).toMatchSnapshot();
  });
});
