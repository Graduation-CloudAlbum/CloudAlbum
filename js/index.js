var uploadPhoto1 = document.getElementById('uploadPhoto1');
var iconChacha1 = document.getElementById('icon-chacha1');
var popLayer = document.getElementById('popLayer');//upload-photos-choose
//点击上传照片
uploadPhoto1.onclick=function(){
	document.getElementById('upload-photos').style.display="block";
	document.getElementById('popLayer').style.display="block";
	document.getElementById('popLayer2').style.display="block";
	document.getElementById('upload-photos-choose').style.display="block";
}
//关闭上传照片
iconChacha1.onclick=function(){
	document.getElementById('upload-photos').style.display="none";
	document.getElementById('popLayer').style.display="none";
}
//关闭选择相册弹出框
var iconChacha2 = document.getElementById('iconChacha2');
iconChacha2.onclick=function(){
	document.getElementById('upload-photos-choose').style.display="none";
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('upload-photos').style.display="none";
	document.getElementById('popLayer').style.display="none";
}
//上传照片下一步
var selectButton = document.getElementById('select-button');
selectButton.onclick=function(){
	document.getElementById('upload-photos-choose').style.display="none";
	document.getElementById('popLayer2').style.display="none";
}
//创建相册
var uploadPhoto2 = document.getElementById('uploadPhoto2');//Create-Album
uploadPhoto2.onclick=function(){
	document.getElementById('popLayer2').style.display="block";
	document.getElementById('Create-Album').style.display="block";
}
//关闭创建相册
var iconChacha3 = document.getElementById('iconChacha3');
iconChacha3.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Create-Album').style.display="none";
}
var CreateAlbumButton1 = document.getElementById('Create-Album-button1');
CreateAlbumButton1.onclick=function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('Create-Album').style.display="none";
}
