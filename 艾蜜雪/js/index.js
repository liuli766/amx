var imgs=document.querySelectorAll(".banner .carousel img");//获取轮播里的图片
var carousel=document.querySelector(".banner .carousel");//获取轮播本身
console.log(carousel);
var index=0;//轮播变换的顺序
var lis=document.querySelectorAll(".banner ul li");//获取li；
var timer=setInterval(function(){
	index++;
	if(index==3){
		index=0;
	}
	scroll();
},3000)

for(var i=0;i<lis.length;i++){
	lis[i].liindex=i;
	lis[i].onclick=function(){
		index=this.liindex;
		scroll();
	}
}
function scroll(){
		carousel.style.transform="translateX(-"+33.33*index+"%)";
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			lis[i].style.width="";	
		}
		lis[index].className="active";
		lis[index].style.width="40"+"px";
		lis[index].style.borderRadius="10"+"px";
}
//设计团队
var design=document.querySelector(".design");
design.onmouseover=function(e){
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="DIV"&& target.className=="pic_list"){
	var img	=target.firstElementChild.firstElementChild;
	img.style.transform="scale(1.2)";
	var p=target.lastElementChild;
	p.style.animation="slideInUp 2s";
	p.style.color="#b85252";
	}
	if(target.nodeName=="IMG"){
		target.style.transform="scale(1.2)";
		target.parentNode.nextElementSibling.nextElementSibling.style.animation="slideInUp 2s";
		target.parentNode.nextElementSibling.nextElementSibling.style.color="#b85252";
	}
}
design.onmouseout=function(e){
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="DIV" && target.className=="pic_list"){
	var img	=target.firstElementChild.firstElementChild;
	img.style.transform="";
	var p=target.lastElementChild;
	p.style.animation="";
	p.style.color="";
	}
	if(target.nodeName=="IMG"){
		target.style.transform="";
		target.parentNode.nextElementSibling.nextElementSibling.style.animation="";
		target.parentNode.nextElementSibling.nextElementSibling.style.color="";
	}
}
