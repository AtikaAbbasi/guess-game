
var unum = document.getElementById("fun")
var text = document.getElementById("text")
var atem = document.getElementById("anum")

var rnum = Math.floor(Math.random()* 10 )+1;
var attm;
var maxRange;

function rgame(){

    
var level = document.getElementById('level').value;

if (level === 'easy') {
maxRange = 10;
} else if (level === 'medium') {
maxRange = 50;
} else if (level === 'hard') {
maxRange = 100;
}

    var rnum = Math.floor(Math.random()* maxRange )+1;
attm = 3;
text.innerHTML = "You have 3 attemps to guess the number "
atem.innerHTML = "Attempts left:  " + attm;
unum.value = '';

}
rgame();


//  var unum = parseInt(document.getElementById("fun").value);
function usub(){

    
var level = document.getElementById('level').value;

if (level === 'easy') {
maxRange = 10;
} else if (level === 'medium') {
maxRange = 50;
} else if (level === 'hard') {
maxRange = 100;
}


    var unum = parseInt(document.getElementById("fun").value);
 rnum = Math.floor(Math.random()* maxRange )+1; 

   if(unum == rnum){
       text.innerHTML = "Conguratulation YOU WON ! " + rnum;
       atem.innerHTML = attm + " Attempts left"
       return;
   }
   else if(unum == rnum + 1 || unum == rnum -1){
       text.innerHTML = "Almost close " + rnum
       atem.innerHTML = attm + " Attempts left"
       return;
   }
   
   else{
       text.innerHTML = "Guest wins! " + rnum
       atem.innerHTML = attm + " Attempts left"
   }
    attm--;
  
   
   
   if(attm > 0 ){
       atem.innerHTML = attm + " Attempts left"
   }
   
   else{
       text.innerHTML = "sorry you lose the game try again " + rnum
       atem.innerHTML = ""
   }
   
   }