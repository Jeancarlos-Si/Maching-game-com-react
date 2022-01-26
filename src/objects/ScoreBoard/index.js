
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

function ScoreBoard() {
    return  /*html*/`
    <header class="score-board">
        ${PlayerName('João')}
        ${VsPlayer()}
        ${PlayerName('Pedro')}
    </header>
    `
}

export default ScoreBoard