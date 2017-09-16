var x = document.getElementById('text1').innerHTML;
function check() {
	var text = document.getElementById('text').value;
	var textChange = "<span style=\"background-color:yellow\">"+text+"</span> ";
	document.getElementById('text1').innerHTML= x.
	replace(new RegExp(text, 'g'),textChange);
}