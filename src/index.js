import "./styles.css";

import { loadHome } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");

function clearContent() {
  content.innerHTML = "";
}

function render(tab) {
  clearContent();
  content.appendChild(tab());
}

// Load default tab
render(loadHome);

// Buttons
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => render(loadHome));
buttons[1].addEventListener("click", () => render(loadMenu));
buttons[2].addEventListener("click", () => render(loadAbout));