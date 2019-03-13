//修改资料
//Modifying-data  ModifyingData
var ModifyingData = document.getElementById('ModifyingData');//
ModifyingData.onclick=function(){
	document.getElementById('Modifying-data').style.display="block";
	document.getElementById('popLayer2').style.display="block";
}	
//关闭修改资料
var iconChacha4 = document.getElementById('iconChacha4');
iconChacha4.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Modifying-data').style.display="none";
}
var ModifyingDataButton1 = document.getElementById('Modifying-data-button1');
ModifyingDataButton1.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Modifying-data').style.display="none";
}

//更换头像
var ChangetheAvatar = document.getElementById('ChangetheAvatar');//
ChangetheAvatar.onclick=function(){
	document.getElementById('Change-the-Avatar').style.display="block";
	document.getElementById('popLayer2').style.display="block";
}
var image = '';
function selectImage(file) {
	if (!file.files || !file.files[0]) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function (evt) {
		document.getElementById('image').src = evt.target.result;
		image = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
}
var image2 = '';
function selectImage2(file) {
	if (!file.files || !file.files[0]) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function (evt) {
		document.getElementById('image2').src = evt.target.result;
		image2 = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
}
//关闭更换头像
var ChangetheAvatarButton2 = document.getElementById('Change-the-Avatar-button2');
ChangetheAvatarButton2.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Change-the-Avatar').style.display="none";
}

//修改密码
var ChangePassword = document.getElementById('ChangePassword');//
ChangePassword.onclick=function(){
	document.getElementById('Change-Password').style.display="block";
	document.getElementById('popLayer2').style.display="block";
}
//关闭修改密码
var iconChacha5 = document.getElementById('iconChacha5');
iconChacha5.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Change-Password').style.display="none";
}
//个人简介 账户安全 空间容量
var menuLi1 = document.getElementById('menuLi1');
var menuLi2 = document.getElementById('menuLi2');
var menuLi3 = document.getElementById('menuLi3');
var contentAboutInfoNo1 = document.getElementById('content-about-info-no1');
var contentAboutInfoNo2 = document.getElementById('content-about-info-no2');
var contentAboutInfoNo3 = document.getElementById('content-about-info-no3');
menuLi1.onclick=function() {
	document.getElementById('menuLi1').style.color="#000";
	document.getElementById('menuLi1').style.borderTop="2px solid #D84C31";
	document.getElementById('menuLi2').style.color="#999";
	document.getElementById('menuLi2').style.borderTop="2px solid #fff";
	document.getElementById('menuLi3').style.color="#999";
	document.getElementById('menuLi3').style.borderTop="2px solid #fff";
	contentAboutInfoNo1.style.display="block";
	contentAboutInfoNo2.style.display="none";
	contentAboutInfoNo3.style.display="none";
}
menuLi2.onclick=function() {
	document.getElementById('menuLi2').style.color="#000";
	document.getElementById('menuLi2').style.borderTop="2px solid #D84C31";
	document.getElementById('menuLi1').style.color="#999";
	document.getElementById('menuLi1').style.borderTop="2px solid #fff";
	document.getElementById('menuLi3').style.color="#999";
	document.getElementById('menuLi3').style.borderTop="2px solid #fff";
	contentAboutInfoNo1.style.display="none";
	contentAboutInfoNo2.style.display="block";
	contentAboutInfoNo3.style.display="none";
}
menuLi3.onclick=function() {
	document.getElementById('menuLi3').style.color="#000";
	document.getElementById('menuLi3').style.borderTop="2px solid #D84C31";
	document.getElementById('menuLi2').style.color="#999";
	document.getElementById('menuLi2').style.borderTop="2px solid #fff";
	document.getElementById('menuLi1').style.color="#999";
	document.getElementById('menuLi2').style.borderTop="2px solid #fff";
	contentAboutInfoNo1.style.display="none";
	contentAboutInfoNo2.style.display="none";
	contentAboutInfoNo3.style.display="block";
} 