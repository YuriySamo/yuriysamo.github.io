

var div = document.createElement('div');
var div1 = document.createElement('div');
div.className = "alert-success";
div1.className = "alert-success";
var dateNow = new Date();
var timeNow = new Date();

 if (dateNow.getMonth()<9){
	var dateNowShow = '0'+(dateNow.getMonth()+1);
}
 else{
	var dateNowShow = dateNow.getMonth();
}

 if (timeNow.getHours()<9){
	var timeNowShow = ''+timeNow.getHours()+1;
}
 else{
	var timeNowShow = timeNow.getHours();
}

 if (timeNow.getMinutes()<10) {
	var minutesNowShow = '0'+timeNow.getMinutes();
}
 else{
	var minutesNowShow = timeNow.getMinutes();
}
dateNow = dateNow.getDate()+'-'+dateNowShow +'-'+ dateNow.getFullYear();
timeNow = timeNowShow +':'+ minutesNowShow;

div.innerHTML = '<strong>Текущая дата: </strong>'+ dateNow;
div1.innerHTML = '<strong>Текущее время: </strong>'+ timeNow;
 
document.body.appendChild(div);
document.body.appendChild(div1);
