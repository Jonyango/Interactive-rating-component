// This file will contain the Javascript interaction.
// Onclick get the value. create a new div, add the value, add the div to its parent, displany none for the selector, display block for the rating card.

const rating = document.querySelector('.ratings-container');
const subBtn = document.querySelector('.btn-submit');
const thankCont = document.querySelector('.thank-you-container');
const thankParentCont =document.getElementById('thank-you');
const ratingCont = document.getElementById('cont-rate');
// 
rating.addEventListener('click',function(e){
  console.log(e);
  if(e.target.nodeName =='SPAN'){
    console.log(e.target);
    e.target.style.background='red';
    const textDiv = document.createElement('div');
    textDiv.textContent=`You selected ${e.target.innerText} out of 5`;
    textDiv.className='user-rating';
    let img =thankCont.firstElementChild
    if(thankCont.children[1].className=='user-rating'){
      thankCont.children[1].remove();
    }
    img.parentNode.insertBefore(textDiv, img.nextSibling);

    console.log(thankCont.children[1]);
  }
  
}
 
);


subBtn.addEventListener('click',function(){
  ratingCont.style.display='none';
  thankParentCont.style.display='block';
  

});