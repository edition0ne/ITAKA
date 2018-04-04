// Select the div via its id and store the selected element
// inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
function invertColor(div){
 let green ="green-color"
 let red ="red-color"
 if (div.classList.contains(green)) {
   div.classList.remove(green);
   div.classList.add(red);
 } else {
   div.classList.remove(red);
   div.classList.add(green);
   };
 };

 function checkVictory(divs) {
   let victorystate = true;
   for(let i = 0; i < divs.length; i++) {
     if(divs[i].classList.contains('green-color')) {
       victorystate = false;
       break;
     }
   }

   if(victorystate == true){
     setTimeout(function(){
       alert('vous avez gagné');

     }, 500);
   }
 //si toute les div sont rouge ,on a gagné
 //si aucune div son vert,on a gagné

 //doit permetre d inverser la couleur de la div désignée.

};


// When someone clicks on anything inside the game container, it triggers
// the anonymous function
gameContainer.addEventListener('click', function(el) {
 let childDivs = document.querySelectorAll('#game-container>div');

 // We get the target of the click event, which is the specific div and not
 // the container div
 let clickedElement = el.target;

 for(let i = 0; i < childDivs.length; i++)
 {

   // childDivs[i] allow us to display every value of the childDivs array
   // because we select it via the array key [i]
   if (childDivs[i] == clickedElement) {


     if(i > 0 && i < (childDivs.length - 1)) {
       invertColor(childDivs [i + 1]);
       invertColor(childDivs [i - 1]);
       // On va inverser la couleur de la div de gauche et de la div de droite
   } else if(i == 0) {
     invertColor(childDivs[i + 1]);
       // On va inverser la couleur de la div de droite
     } else if(i == (childDivs.length - 1)) {
       invertColor(childDivs[i - 1]);
       // On va inverser la couleur de la div de gauche
     }
   }
 }
 checkVictory(childDivs);
});

     // if childDivs[i - 1] and childDivs[i + 1] are not equals to undefined
     //if (childDivs[i - 1] != undefined && childDivs[i + 1] != undefined) {
       // For the previous div
       //if(childDivs[i - 1].classList.contains('green-color')) {
         //childDivs[i - 1].classList.remove('green-color');
         //childDivs[i - 1].classList.add('red-color');
       //} else {
         //childDivs[i - 1].classList.remove('red-color');
         //childDivs[i - 1].classList.add('green-color');
       //}
       // for the next div
       //if(childDivs[i + 1].classList.contains('green-color')) {
         //childDivs[i + 1].classList.remove('green-color');
         //childDivs[i + 1].classList.add('red-color');
       //} else {
         //childDivs[i + 1].classList.remove('red-color');
         //childDivs[i + 1].classList.add('green-color');
       //}
       // If I click on the first div
     //} else if(i == 0) {
       //if(childDivs[i + 1].classList.contains('green-color')) {
         //childDivs[i + 1].classList.remove('green-color');
         //childDivs[i + 1].classList.add('red-color');
       //} else {
         //childDivs[i + 1].classList.remove('red-color');
         //childDivs[i + 1].classList.add('green-color');
       //}
       // If I click on the last div
     //} else if(i == (childDivs.length - 1)) {
       //if(childDivs[i - 1].classList.contains('green-color')) {
         //childDivs[i - 1].classList.remove('green-color');
         //childDivs[i - 1].classList.add('red-color');
       //} else {
         //childDivs[i - 1].classList.remove('red-color');
         //childDivs[i - 1].classList.add('green-color');
       //}
