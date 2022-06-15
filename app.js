// This file will contain the Javascript interaction.
// Onclick get the value. create a new div, add the value, add the div to its parent, displany none for the selector, display block for the rating card.

const rating = document.querySelectorAll('.rating');
const subBtn = document.querySelector('.btn-submit');
const thankCont = document.querySelector('.thank-you-container');
// 
rating[0].addEventListener('click',function(e){
  console.log('I have been clicked',e.target.innerText);
}
 
);
console.log(thankCont.firstElementChild);