var chec =  false;


window.onload = function(){


	var un = document.getElementById("end");
	un.addEventListener("mouseover",gameEnd);
    

    var re = document.getElementById("start");
    re.addEventListener("mouseover",startGme);


var boun = document.querySelectorAll("div#maze div.boundary");


	for (var p=0; p<boun.length; p++)
	{
		boun[p].addEventListener("mouseover",redTurn);
	}




}


function redTurn (){
	chec = true;
		var boun = document.querySelectionorAll("div#maze div.boundary");
		for (var p =0;p< boun.length ; p++) {
			boun[p].setAttribute("class","boundary youlose");
		}
}

function gameEnd(){
    var ss=document.getElementById("status");

	if (chec){
		ss.innerHTML="game over! You lost.";
	}
	else {
		ss.innerHTML = "great job! You won ";
	}
}


function startGame(){

	chec= false;
	var boun=document.querySelectorAll"div#maze div.boundary");
	for (var p =0;p< boun.length ; p++) {
			boun[p].setAttribute("class","boundary");
		}






}
}