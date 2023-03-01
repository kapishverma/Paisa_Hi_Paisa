const paisa = document.getElementById("box");
const display = document.querySelector("#display i");

paisa.addEventListener('mouseover' ,  function(){

   paisa.style.top = "calc(" + Math.round(10 + 90*Math.random())+"vh - 120px) ";
   paisa.style.left = "calc(" + Math.round( 10  + 90*Math.random())+"vw - 160px) ";
   display.innerHTML = parseFloat(display.innerHTML) + 2 ;
}); 