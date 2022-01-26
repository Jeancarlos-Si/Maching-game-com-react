import "./src/style/setttings/color.css"
import "./src/style/generic/reset.css"
import "./src/style/elements/base.css"

import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");


$root.insertAdjacentHTML(
    "beforeend",
    `
      ${ScoreBoard()}
      ${BoardGame(4)}
    `
  );
