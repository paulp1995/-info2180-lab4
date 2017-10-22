var chec = false; //keep track if the user hit any maze walls.
  
  
   window.onload = function() {


      var un = document.getElementById("end");

       un.addEventListener("mouseover",gameEnd);



        var re = document.getElementById("start");

     re.addEventListener("click",startGame);


       var boun = document.querySelectorAll("div#maze div.boundary");
 
  
  
  function redTurn (){
 
   
    chec = true;
      var boun = document.querySelectionorAll("div#maze div.boundary");
      for (var p =0;p< boun.length ; p++) {
      allboun[p].setAttribute("class","boundary youlose");
       boun[p].setAttribute("class","boundary youlose");
      }
  }



   function gameEnd(){
       var ss =document.getElementById("status")

       if(chec) {
       ss.innerHTML="You Lost.";
      } else {
       ss.innerHTML="great job! You won ";
       
       }
  }
  
  function startGame(){
 
   chec= false;
   var boun=document.querySelectorAll"div#maze div.boundary");
   for (var p =0;p< boun.length ; p++) {
       boun[p].setAttribute("class","boundary");
     }