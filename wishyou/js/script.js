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
var b=document.getElementById("t1").value;

document.getElementById("uname").innerHTML=final_text+"&nbspतर्फे";
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
if(txt.search("%20")>0)
{
final_text=txt.replace("%20","&nbsp");
}

else{
final_text=txt;
}
var b=document.getElementById("t1").value;

document.getElementById("uname").innerHTML=final_text+"&nbspतर्फे";
}
