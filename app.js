var ex="";

function add(ch){
	ex = ex + ch;
	document.getElementById("display").value = ex;
}

function equal(){
	document.getElementById("display").value = eval(ex);
}

function C(){
	expression = "";
	document.getElementById("display").value = "";
 }

 function helpDisplay(){
 	alert("작성자 : 최수인")
 }

 function fraction(){
 	var z=expression;
 	expression = eval("1/z");
 	document.getElementById("display").value = ex;
 }

 function CE(){
 	var c=expression;
 	var l=c.length;
 	c = c.substr(0,l-1);
 	expression = c;
 	document.getElementById("display").value = ex;
 }

 function do_sqrt(){
 	var x=expression;
 	expression=Math.sqrt(x);
 	document.getElementById("display").value = ex;
 }

  function do_ln(){
 	var y=expression;
 	expression=Math.log(y);
 	document.getElementById("display").value = ex;
 }


 function plMa(){
 	var w= expression;
 	expression = parseFloat(w) * -1;
 	document.getElementById("display").value = ex;
 }

function trans(){
	var v = expression;
	expression = eval("v/100");
	document.getElementById("display").value = ex;
}
