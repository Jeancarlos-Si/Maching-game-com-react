import "./src/style/setttings/color.css";
import "./src/style/generic/reset.css";
import "./src/style/elements/base.css";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);