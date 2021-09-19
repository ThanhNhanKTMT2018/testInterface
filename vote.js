function changeTutorial(){
	var slider = document.getElementById("tutorial");
	var output = document.getElementById("val_tutorial");
	output.innerHTML = slider.value + "%";
	var color = 'linear-gradient(90deg, #1EAACE ' + slider.value + '%, white ' + slider.value +'%)'
	slider.style.background = color;
	recount();
}
function changeTraining(){
	var slider = document.getElementById("training");
	var output = document.getElementById("val_training");
	output.innerHTML = slider.value + "%";
	var color = 'linear-gradient(90deg, #1DBB90 ' + slider.value + '%, white ' + slider.value +'%)'
	slider.style.background = color;
	recount();
}
function changeTeacher(){
	var slider = document.getElementById("teacher");
	var output = document.getElementById("val_teacher");
	output.innerHTML = slider.value + "%";
	var color = 'linear-gradient(90deg, #FFB20E ' + slider.value + '%, white ' + slider.value +'%)'
	slider.style.background = color;
	recount();
}
function changePrice(){
	var slider = document.getElementById("price");
	var output = document.getElementById("val_price");
	output.innerHTML = slider.value + "%";
	var color = 'linear-gradient(90deg, #1EAACE ' + slider.value + '%, white ' + slider.value +'%)'
	slider.style.background = color;
	recount();
}
function recount(){
	var slider1 = document.getElementById("tutorial");
	var slider2 = document.getElementById("training");
	var slider3 = document.getElementById("teacher");
	var slider4 = document.getElementById("price");
	var output = document.getElementById("percent");
	output.innerHTML = parseInt((parseInt(slider1.value) + parseInt(slider2.value) + parseInt(slider3.value) + parseInt(slider4.value))/4) + '%';
}