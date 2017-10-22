var chec =  false;


window.onload = function(){


	var un = document.getElementById("end");
	un.addEventListener("mouseover",gameEnd);



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
			allboun[p].setAttribute("class","boundary youlose");
		}
}

function gameEnd(){
	if (chec){
		alert("game over! You lost.");
	}
	else {
		alert("great job! You won ");
	}
}