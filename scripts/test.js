
var first = 0;
var second = 0;


// function goClick() {
// 	first = document.getElementById("inputForm1").value;
//     second = document.getElementById("inputForm2").value;
    



function plus() {
	first = document.getElementById("inputForm1").value;
    second = document.getElementById("inputForm2").value;

	
	total= (+first)+(+second);
	if (total> -999999999 && total<99999999){
	alert(total);
    }    
	else {
		alert("Некорректно!");
	}
}



function minus() {
	first = document.getElementById("inputForm1").value;
    second = document.getElementById("inputForm2").value;
    total= (+first)-(+second);
    if (total> -999999999 && total<99999999){
	alert(total);
    }    
	else {
		alert("Некорректно!");
	}
}


function multiply() {
	first = document.getElementById("inputForm1").value;
    second = document.getElementById("inputForm2").value;
    total= (+first)*(+second);
    if (total> -99999999999 && total<9999999999){
	alert(total);
    }    
	else {
		alert("Некорректно!");
	}
}

function divide() {
	first = document.getElementById("inputForm1").value;
    second = document.getElementById("inputForm2").value;
    total= (+first)/(+second);
    if (total> -999999999 && total<99999999){
	alert(total);
    }    
	else {
		alert("Некорректно!");
	}
}