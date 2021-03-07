import "./Attacks";
import { fixture } from "@open-wc/testing";
import { html, render } from "lit-html";

test("pokemon-attacks renders the correct elements", () => {
  render(html`<pokemon-attacks name="Sludge Bomb" damage="55"></pokemon-attacks>`, document.body);
  expect(document.body.getElementsByTagName("pokemon-attacks")).toBeDefined();
});

test("pokemon-attacks renders as it should", async () => {
  const element = await fixture(html`<pokemon-attacks name="Sludge Bomb" damage="55"></pokemon-attacks>`);
  expect(element).toMatchSnapshot();
});
