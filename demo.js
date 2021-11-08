/* CODE BY TOÀN K6 TOÀN LÊ */ 

var view = document.createElement("meta");
var div = document.createElement("div");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var btn5 = document.createElement("button");
var info = document.createElement("button");
var chatNow = document.createElement("button");
var input = document.createElement("input");
var input2 = document.createElement("input");
var myInfo = document.createElement("input");
view.content ="width=device-width, initial-scale=0.5";
view.name ="viewport";
document.head.appendChild(view);


div.setAttribute("id","box");
div.style.width="400px";
div.style.height="200px";
div.style.top= "50";
div.style.zIndex ="1";
div.style.position ="absolute";
div.style.background = "#00E2DD";


myInfo.value ="my email: ltoan3816@gmail.com, send my a message!";
myInfo.setAttribute("id","myInfo");
myInfo.style.position="absolute";
myInfo.zIndex ="10";
myInfo.style.top="-10%";
myInfo.style.width="400px";
myInfo.style.height="1px";


btn1.setAttribute("onclick", "start();");
btn1.innerHTML ="Start";
btn1.style.fontSize ="35px";
btn1.style.width ="200px";
btn1.style.height ="55px";
btn1.style.position= "relative";
btn1.style.background ="none";
btn1.addEventListener("mouseenter", function(){btn1.style.background ="#83FF00"});
btn1.addEventListener("mouseleave", function(){btn1.style.background ="none"});


input.setAttribute("id","inp");
input.placeholder ="ANY TEXT!!";
input.style.border="2px solid #006EF3";
input.value ="testing!";
input.style.fontSize ="35px";
input.type = "text";
input.style.color ="#4B4900";
input.style.height ="60px";
input.style.width ="395px";


input2.setAttribute("id","time");
input2.placeholder ="sec {1 sec = 1 > 0.9 > 0.8...}";
input2.value ="1";
input2.style.color ="#4B4900";
input2.style.border="2px solid #006EF3";
input2.style.fontSize ="30px";
input2.style.height ="50px";
input2.style.width ="395px";


btn2.innerHTML ="reset all";
btn2.setAttribute("onclick","reset()");
btn2.style.fontSize ="35px";
btn2.style.width ="170px";
btn2.style.height ="55px";
btn2.style.background ="none";
btn2.addEventListener("mouseenter", function(){btn2.style.background ="#83FF00";btn4.innerText="SpamMode[off]"});
btn2.addEventListener("mouseleave", function(){btn2.style.background ="none"});


btn3.onclick = function (){ var VRe = document.getElementById("box"); VRe.parentNode.removeChild(VRe)};
btn3.innerHTML ="close";
btn3.style.fontSize ="25px";
btn3.style.width ="160px";
btn3.style.height ="35px";
btn3.style.position= "relative";
btn3.style.background ="#00E2DD";
btn3.addEventListener("mouseenter", function(){btn3.style.background ="#83FF00"});
btn3.addEventListener("mouseleave", function(){btn3.style.background ="none"});


btn4.style.width ="160px";
btn4.style.height ="35px";
btn4.style.fontSize ="20px";
btn4.innerHTML ="SpamMode[off]";
btn4.style.background ="#00E2DD";
btn4.addEventListener("mouseenter", function(){btn4.style.background ="#83FF00";btn4.innerText ="SpamMode[on]"});
btn4.addEventListener("mouseleave", function(){btn4.style.background ="#00E2DD";});
btn4.onclick =function(){var _0xfa88=["script","createElement","src","https://raw.githack.com/scriptsnewbie/SpamBot/main/SpamBot_Omegle_v2.js","appendChild","head","getElementsByTagName"],sr=document[_0xfa88[1]](_0xfa88[0]);sr[_0xfa88[2]]=_0xfa88[3],document[_0xfa88[6]](_0xfa88[5])[0][_0xfa88[4]](sr);clearInterval(fun)};


chatNow.style.width ="80px";
chatNow.style.height ="57px";
chatNow.style.fontSize ="15px";
chatNow.setAttribute("onclick","chatNow()");
chatNow.innerHTML ="chat now";
chatNow.style.position ="absolute";
chatNow.style.background ="#00E2DD";
chatNow.addEventListener("mouseenter", function(){chatNow.style.background ="#83FF00"});
chatNow.addEventListener("mouseleave", function(){chatNow.style.background ="#00E2DD"});


info.style.width ="30px";
info.style.height ="55px";
info.style.fontSize ="9px";
info.innerHTML ="info\nMe";
info.style.position ="absolute";
info.style.background ="#00E2DD";
info.setAttribute("onclick","copy()");
info.addEventListener("mouseenter", function(){info.style.background ="#83FF00";info.innerText="copi\ned"});
info.addEventListener("mouseleave", function(){info.style.background ="#00E2DD"});


btn5.style.width ="320px";
btn5.style.height ="20";
btn5.style.background ="#00E2DD";
btn5.innerHTML="how to use";
btn5.onclick =function (){alert("content to spam then press start\n\ncontent to spam then press start if you want to delete spam, then select reset\n\n if you want to add another text, press start to start over \n\n if there is an error, press reset or close and then paste the new code\n\n------------------------\n\nif you want to delete spam, then select reset\n\n if you want to add another text, press start to start over \n\n if there is an error, press reset or close and then paste the new code you need to be in DESKTOP mode for the code to run properly\n\n. start: using for start command\n\n. reset: using for reset command\n\n. close: using close window\n\n. view more: using view more command spam bot\n\n. chat now: you will be taken directly to the chat page without going through the checks")};


document.body.appendChild(div);
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(info);
div.appendChild(input);
div.appendChild(input2);
div.appendChild(btn3);
div.appendChild(btn4);
div.appendChild(chatNow);
div.appendChild(btn5);
document.body.appendChild(myInfo);


var scr1 = document.createElement("SCRIPT");
var scr2 = document.createElement("SCRIPT");


var txt1 = document.createTextNode("document.getElementsByClassName("chatmsg")[0].setAttribute("disabled","");setTimeout(function(){alert('---TURN ON DESKTOP MODE RIGHT NOW!!---')},1);var box = document.getElementById('box');box.addEventListener('touchmove',function(e){var touchLocation=e.targetTouches[0];var localX=touchLocation.pageX.toFixed(0);var localY=touchLocation.pageY.toFixed(0);box.style.left=localX-200+'px';box.style.top=localY-100+'px';});var input=document.getElementById('inp');var tDelay=document.getElementById('time');function BotOmegle(){let name1='disconnectbtn';let NewBtn=document.querySelector('.'+name1);let name2='chatmsg';let ChatBox=document.querySelector('.'+name2).setAttribute("disabled","");let name3='sendbtn';let SendBtn=document.querySelector('.'+name3);NewBtn.click();ChatBox.value=input.value;SendBtn.click()};input.addEventListener('change',BotOmegle); function copy(){var copyTextarea=document.getElementById('myInfo');copyTextarea.select();document.execCommand('copy');};function start(){window.fun=setInterval(BotOmegle,tDelay.value*1000);Msg();};");


/* script 2 */

var txt2 = document.createTextNode("function chatNow(){var checkbox =  'checkbox';var button = 'button';document.getElementById('textbtn').click();document.querySelectorAll('input[type=checkbox]')[1].click();document.querySelectorAll('input[type=checkbox]')[2].click();document.querySelectorAll('input[type=button]')[0].click();}; function Msg(){window.Re=setInterval(function(){var ReC=grecaptcha.getResponse().length;if(ReC==0) clearInterval(Re);alert('opps this page have Recaptcha');reset();},1000);};Msg();function reset(){var id=window.setInterval(()=>{},99999);for(var i=0;i<id;i++)window.clearInterval(i);};");


scr1.appendChild(txt1);
scr2.appendChild(txt2);
document.body.appendChild(scr1); 
document.body.appendChild(scr2); 

/* how to use this code?:
 first you need download {HTML website view} and open {console paste this code} */
