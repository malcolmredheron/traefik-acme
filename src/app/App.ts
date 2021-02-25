import "preact/debug"; // Must be first, they say
import {h, render} from "preact";
import "regenerator-runtime/runtime";
import {AppView} from "./view/AppView";

function main(): void {
  render(h(AppView, {}), document.getElementById("container") as Element);
}
main();
