window.onload = function(){



var boun = document.querySelectionorAll("div#maze div.boundary");
	for (var p=0; p<boun.length; p++)
	{
		boun[p].addEventListener("mouseover",redTurn);
	}




}
function redTurn(){
	var boun= document.querySelectionorAll("div#maze div.boundary");
	for (var p =0;p< boun.length ; p++) {
		allboun[p].setAttribute("class","boundary youlose");
	}
}