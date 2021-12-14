window.onload=function(){
	var mybtn=document.getElementsByClassName('sxNavIcon')[0];
	var myul=document.getElementsByTagName("ul")[0];
	mybtn.onclick=function(){
		if (myul.getAttribute("class") == null){
			myul.setAttribute("class","myhide");
		}else{
			myul.removeAttribute("class");

		}
	}
}