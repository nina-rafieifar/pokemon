import "../Attributes/Evolutions";
import { fixture } from "@open-wc/testing";
import { html, render } from "lit-html";

test("pokemon-evolution renders the correct elements", () => {
  render(html`<pokemon-evolution name="Ivysaur" number="002" image="some url"></pokemon-evolution>`, document.body);
  expect(document.body.getElementsByTagName("pokemon-evolution")).toBeDefined();
});

test("pokemon-evolution renders as it should", async () => {
  const element = await fixture(
    html`<pokemon-evolution name="Ivysaur" number="002" image="some url"></pokemon-evolution>`
  );
  expect(element).toMatchSnapshot();
});
