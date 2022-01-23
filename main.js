import "./src/style/setttings/color.css"

import "./src/style/generic/reset.css"
import "./src/style/elements/base.css"
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${PlayerName("Jeancarlos")}
    ${PlayerName("Pedro")}
    ${BoardGame(6)}  
    `
)
