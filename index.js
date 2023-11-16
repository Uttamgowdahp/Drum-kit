var totalDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<totalDrums; i++)
   {
      document.querySelectorAll("button")[i].addEventListener("click", function handleClick()
      {
      var buttonInnerHtml = this.innerHTML;
      soundLetter(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml)
      }
       );
   }


document.addEventListener("keypress", function(event){
   soundLetter(event.key);
   buttonAnimation(event.key);
});




function soundLetter(key)
{
switch(key)
{
   case 'w' : {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
   }

   case 'a' :
      {
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      }

   
    case 's' :
         {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
         } 
         
         
   case 'd' :
      {
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
      }

      
   case 'j' :
      {
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
      }

      
   case 'k' :
      {
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
      }

      
   case 'l' :
      {
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
      }
   }

}

function buttonAnimation (btn)
{
   var animateBtn = document.querySelector("." + btn);
   animateBtn.classList.add("pressed");

   setTimeout(function() {
      animateBtn.classList.remove("pressed");
   } ,100);
}
