function showAll(){
	var x = document.getElementsByClassName("_1newcourse");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}

function showLanguage(){
	disableAll();
	var x = document.getElementsByClassName("Language");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}
function showMarketing(){
	disableAll();
	var x = document.getElementsByClassName("Marketing");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}
function showSocial(){
	disableAll();
	var x = document.getElementsByClassName("Social");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}
function showMedicine(){
	disableAll();
	var x = document.getElementsByClassName("Medicine");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}
function showComputer(){
	disableAll();
	var x = document.getElementsByClassName("Computer");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "350px";
		x[i].style.height = "350px";
	}
	return false;
}

function disableAll()
{
	var x = document.getElementsByClassName("_1newcourse");
	for (let i=0; i<x.length; i++){
		x[i].style.width = "0px";
		x[i].style.height = "0px";
	}
	
}
