import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  window.cardFrontBack = {} //Criação de escopo global "Local" para ser utilizado apenas em CardFrontBack
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back')


    $cardFrontBack.classList.toggle('-active')
  }
  //Faz a mesma coisa que $cardFrontBack.classList.toggle('-active')
  //if($cardFrontBack.classList.contains('-active')){
  //  $cardFrontBack.classList.remove('-active')
  // }else{
  //  $cardFrontBack.classList.add('-active')  
  //}
  
    

  return /*html*/ `
    <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("javascript", "Logo do JavaScript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;