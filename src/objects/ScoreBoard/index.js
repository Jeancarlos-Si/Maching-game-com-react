
import PlayerName from "../../components/PlayerName";
import "./style.css";

function ScoreBoard() {
    return  /*html*/`
    <header class="score-board">
        ${PlayerName('João')}
        ${PlayerName('Pedro')}
    </header>
    `
}

export default ScoreBoard