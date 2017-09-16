function validateForm(){
	var x = document.forms["myForm"]["froom"].value;
	if (x == ""){
		alert ("room must be filled out")
		return false;
	}
}

function validate Form(){
	var x = document.forms["myForm"]["email"].value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2=>x.length){
		alert("Not a vaild e-mail address");
		return false;
	}
}

var d = new Date();
d.setFullyear(2017, 12 , 9);
document.getElementByID("demo").innerHTML = 

d.getDate()+"/"+ (d.getMonth() +1) + "/" + d.getFullYear();4

document.getElementByID("demo1").innerHTML =

