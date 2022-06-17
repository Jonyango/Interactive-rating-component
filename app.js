// Onclick get the value. create a new div, add the value, add the div to its parent, displany none for the selector, display block for the rating card.


const subBtn = document.querySelector('.btn-submit');
const thankCont = document.querySelector('.thank-you-container');
const thankParentCont =document.getElementById('thank-you');
const ratingCont = document.getElementById('cont-rate');



ratingCont.addEventListener('submit',function(e){
   
 e.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked').value;
  
    const textDiv = document.createElement('div');
    textDiv.textContent=`You selected ${rating} out of 5`;
    textDiv.className='user-rating';

    let img =thankCont.firstElementChild

    if(thankCont.children[1].className=='user-rating'){
      thankCont.children[1].remove();
    }
    
    img.parentNode.insertBefore(textDiv, img.nextSibling);

  });



subBtn.addEventListener('click',function(){
  ratingCont.style.display='none';
  thankParentCont.style.display='block';
  

});