import "./Sizes";
import { html, render } from "lit-html";

test("pokemon-sizes is defined", () => {
  const el = document.createElement("pokemon-sizes");
  expect(el).toBeTruthy();
});

test("pokemon-sizes renders with default values", () => {
  render(
    html`<pokemon-sizes weightMax="${10}" weightMin="${10}" heightMax="${10}" heightMin="${10}"></pokemon-sizes>`,
    document.body
  );
  expect(document.body.getElementsByTagName("pokemon-sizes")).toBeDefined();
});
