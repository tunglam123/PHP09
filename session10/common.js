function myFunction() {
	var x = document.getElementById("myImg").src;
	document.getElementById("demo").innerHTML = x ;
	document.getElementById("demo").style.color = "blue"; fontsize ="20px";
}

function getInfo(name,width){
	document.getElementById("imageChange").src = name;
	document.getElementById("imageChange").style.width = width +"px" 
}