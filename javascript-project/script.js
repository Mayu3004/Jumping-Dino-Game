score = 0;
cross = true;

audio = new Audio('music.mp3');

audiogo = new Audio('gameover.mp3');

// setTimeout(() => 
// {
//  audio.play()
// },1000);

document.onkeydown = function (e)
{
 console.log("Key code is: ",e.keyCode)
 if(e.keyCode == 38) 
 {
  dino = document.querySelector('dino');
  dino.classList.add('animateDino');
  setTimeout(() => 
 {
  dino.classList.remove('animateDino');
 },700);
 }
}