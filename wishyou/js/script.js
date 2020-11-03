function textvalue()
{
var final_text;
var d="?";
var k="!";
var a="?"+document.getElementById("t1").value+"!";

var start1=a.indexOf(d)+1;
var end1=a.indexOf(k);
var txt=a.substring(start1,end1);
if(txt.search("%20")>0)
{
final_text=txt.replace("%20","&nbsp");
}

else{
final_text=txt;
}
var a="file:///C:/Users/Apex/coursera-test/WishYou/Dhantrayodashi1.html?";
var b=document.getElementById("t1").value;
var c="!"
window.open(a+b+c);
/*document.getElementById("uname").innerHTML=final_text+"&nbspतर्फे";*/
}


function getvalue()
{
var final_text;
var d="?";
var k="!";
var a=window.location.href;

var start1=a.indexOf(d)+1;
var end1=a.indexOf(k);
var txt=a.substring(start1,end1);
if(txt.search("-")>0)
{
final_text=txt.replace("-","&nbsp");
}

else{
final_text=txt;
}
/*var b=document.getElementById("t1").value;*/

document.getElementById("uname").innerHTML=final_text+"&nbspतर्फे";
}

function whatsapp_dhan(){
	var url=window.location.href;
	var final_text;
	if(url.search("%20")>0)
{
final_text=url.replace("%20","-");
}
else{
	final_text=url;
}
	var wa="whatsapp://send?text=https%3A%2F%2F";
	/*alert(wa+final_text);*/
	window.open(wa+final_text);
}
