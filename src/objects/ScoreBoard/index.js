
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import "./style.css";

function ScoreBoard() {
    return  /*html*/`
    <header class="score-board">
        ${PlayerName('João')}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(2)}
        ${PlayerName('Pedro')}
    </header>
    `
}

export default ScoreBoard