//关于我们
var shotright=document.querySelector(".shooting_right");
var about=document.querySelector(".about");
var li=document.querySelectorAll(".shooting .shooting_left li");
li[0].onclick=function(){
	shotright.style.opacity="1";
	about.style.opacity="0";
	this.style.color="#fc8370";
	this.lastElementChild.innerHTML=">";
	li[1].style.color="#333";
	li[1].lastElementChild.innerHTML="";
}
li[1].onclick=function(){
	shotright.style.opacity="0";
	about.style.opacity="1";
	this.style.color="#fc8370";
	this.lastElementChild.innerHTML=">";
	li[0].style.color="#333";
	li[0].lastElementChild.innerHTML="";
}