var uploadPhoto1 = document.getElementById('uploadPhoto1');
var uploadPhoto3 = document.getElementById('uploadPhoto3');
var iconChacha1 = document.getElementById('icon-chacha1');
var popLayer = document.getElementById('popLayer');//upload-photos-choose
//点击上传照片
uploadPhoto1.onclick=function(){
	document.getElementById('upload-photos').style.display="block";
	document.getElementById('popLayer').style.display="block";
	document.getElementById('popLayer2').style.display="block";
	document.getElementById('upload-photos-choose').style.display="block";
}
var uploadPhotosLeft = document.getElementById('upload-photos-left');
var uploadPhotosRight = document.getElementById('upload-photos-right');
var uploadPhotosGroup = document.getElementById('upload-photos-group');
var uploadPhotosGroupLi = uploadPhotosGroup.getElementsByTagName('li');

var bLi="";
uploadPhotosRight.onclick = function(){
	uploadPhotosGroup.style.display="block"
}
for(var i=0;i<uploadPhotosGroupLi.length;i++){
	uploadPhotosGroupLi[i].index = i;
	uploadPhotosGroupLi[i].onclick = function(){
		str = (function(i){
			bLi=uploadPhotosGroupLi[i].innerHTML;
			uploadPhotosLeft.innerHTML=bLi;
			return uploadPhotosLeft.innerHTML;
		})(this.index);
		uploadPhotosGroup.style.display="none"
		uploadPhotosLeft.innerHTML=str
	}
}
//点击上传照片
uploadPhoto3.onclick=function(){
	document.getElementById('upload-photos').style.display="block";
	document.getElementById('popLayer').style.display="block";
	// document.getElementById('popLayer2').style.display="block";
	// document.getElementById('upload-photos-choose').style.display="block";
}
//关闭上传照片
iconChacha1.onclick=function(){
	document.getElementById('upload-photos').style.display="none";
	document.getElementById('popLayer').style.display="none";
	uploadPhotosLeft.innerHTML="我的相册";
	nextTime.style.display="block";
	nowTime.style.display="none";
	logOutTime.style.display="none";
}
//关闭选择相册弹出框
var iconChacha2 = document.getElementById('iconChacha2');
iconChacha2.onclick=function(){
	document.getElementById('upload-photos-choose').style.display="none";
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('upload-photos').style.display="none";
	document.getElementById('popLayer').style.display="none";
	uploadPhotosLeft.innerHTML="我的相册";
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
//点击相册
//myAlbum-menu1
var myAlbumContent=document.getElementById('myAlbum-content');
var myAlbumContent2=document.getElementById('myAlbum-content2');
var myAlbumLi=myAlbumContent.getElementsByTagName('li');
var myAlbumMenu1=document.getElementById('myAlbum-menu1');
var myAlbumMenu2=document.getElementById('myAlbum-menu2');
var open=document.getElementById('open');
var open2=document.getElementById('open2');
var a="";
for(var i=0;i<myAlbumLi.length;i++){
	myAlbumLi[i].onclick=function(){
		myAlbumMenu1.style.display="none";
		myAlbumMenu2.style.display="block";
		myAlbumContent.style.display="none";
		myAlbumContent2.style.display="block";
		open.style.display="none";
		open2.style.display="block";
		var aP = this.getElementsByTagName('p');
		a=aP[0].innerHTML;
	}
}

//上传图片
var uploadPhotosPopContentButton =document.getElementById('upload-photos-pop-content-button');
uploadPhotosPopContentButton.onclick=function(){
	document.getElementById('upload-photos-pop-content-button').style.display="none";
	document.getElementById('upload-photos-pop-content-footer').style.display="none";
	document.getElementById('upload-photos-pop-content-footer2').style.display="block";
}
var magId=0;
function setImagePreviews(){
	var docobj=document.getElementById("doc"+magId);
	var dd=document.getElementById("dd");
	var fileList=docobj.files;	
	for( var i=0;i<fileList.length;i++){
		magId++;
		$(dd).append("<div class='img-wrap' imgid='img"+(magId-1)+"'><img id='img"+(magId-1)+"'/><span class='closeimg"+(magId-1)+" close'>×</span><div class='img-button'><p>adhg.jpg</p></div></div>");
		$(".fileinput-wrap [imgid=img"+(magId-1)+"]")[0].style.position="absolute";	
		$(".fileinput-wrap").append('<input class="inputfile" type="file" name="files" id="doc'+magId+'" imgid="img'+magId+'" onchange="javascript:setImagePreviews()" />');		
		$(".fileinput-wrap").append('<label for="doc'+magId+'" class="btn btn-default footer-button1">继续添加</label> ');		

		$(".closeimg"+(magId-1)).on("click",function(e){
			var id=$(this).parents(".img-wrap").attr("imgid");
			$(this).parent().remove();
			$(".fileinput-wrap input[imgid="+id+"]").remove();
		})
		var imgObjPreview=document.getElementById("img"+(magId-1));
		if(docobj.files&&docobj.files[i]){
			imgObjPreview.style.display="block";
			imgObjPreview.src=window.URL.createObjectURL(docobj.files[i]);
		}else{
			docobj.select();
			var imgsrc=document.selection.createRange().text;
			var localImageId=document.getElementById("img"+(magId-1));
			try{
				localIamgeId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				localIamgeId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=imgsrc;
			}catch(e){
				alert("上传图片出错")
				return false;
			}
			imgObjPreview.style.display="none";
			document.selection.empty();
		}		
	}
	return true;
}



//相册排序
var albumSort=document.getElementById('album-sort');
var albumSortLi=albumSort.getElementsByTagName('li');
var albumSortName=""
for(var i=0;i<albumSortLi.length;i++){
	albumSortLi[i].onclick = function(){
		albumSortName=this.innerHTML;
		alert(albumSortName)
	}
}


// //时间控件
// function nextTimes(){
var myDate = new Date(), Y = myDate.getFullYear(), M = myDate.getMonth() + 1, D = myDate.getDate() ,H = myDate.getHours(), S = myDate.getMinutes();
var M2 = M + 1;
//处理月是一位的情况
if((M + '').length == 1){
	M = '0' + (M + '');
}
if((M2 + '').length == 1){
	M2 = '0' + (M2 + '');
}
//处理日是一位的情况
if((D + '').length == 1){
	D = '0' + (D + '')
}
var curDay = Y + '-' + M + '-' + D;
var curDay2 = Y + '-' + M2 + '-' + D;
var hou = H + ':' + S;
console.log(curDay2)
$('#logOutTime').val(curDay + 'T' + hou)
$("#logOutTime").attr("min",curDay + 'T' + hou)
$("#logOutTime").attr("max",curDay2 + 'T' + hou)




//选择上传
var sendStyleLi1=document.getElementById('send-style-li1');
var sendStyleLi2=document.getElementById('send-style-li2');
var logOutTime=document.getElementById('logOutTime');
var nowTime=document.getElementById('nowTime');
var nextTime=document.getElementById('nextTime');
//定时上传
sendStyleLi1.onclick = function(){
	nextTime.style.display="none";
	nowTime.style.display="block";
	logOutTime.style.display="block";
}
sendStyleLi2.onclick = function(){
	nextTime.style.display="block";
	nowTime.style.display="none";
	logOutTime.style.display="none";
}


//批量管理
var uploadPhoto6=document.getElementById('uploadPhoto6');
var myAlbumContent2Span=myAlbumContent2.getElementsByTagName('span');
var myAlbumContent2Li = myAlbumContent2.getElementsByTagName('div');
uploadPhoto6.onclick = function(){

	if(uploadPhoto6.style.color != "rgb(0, 0, 0)"){
		uploadPhoto6.style.color= "#000";
		uploadPhoto6.style.borderBottom="2px solid #D84C31";
		document.getElementById('admin-button').style.display="block";
		for(var i=0; i<myAlbumContent2Span.length; i++){
			myAlbumContent2Span[i].style.display="block";
			
		}
		for(var j=0;j<myAlbumContent2Li.length; j++){
			 myAlbumContent2Li[j].style.background="#000";
			myAlbumContent2Li[j].style.opacity="0.9";
			console.log("sa")

		}
	}
	else{
		uploadPhoto6.style.color= "#9999A6";
		uploadPhoto6.style.borderBottom= "";
		document.getElementById('admin-button').style.display="none";
		for(var i=0; i<myAlbumContent2Span.length; i++){
			myAlbumContent2Span[i].style.background="rgb(255, 255, 255)";
			myAlbumContent2Span[i].style.color="#8b8be8";
			myAlbumContent2Span[i].style.display="none";
		}
		for(var j=0;j<myAlbumContent2Li.length; j++){
			 myAlbumContent2Li[j].style.background="";
			myAlbumContent2Li[j].style.opacity="";

		}

	}
	
}
//选中
for(var i=0; i<myAlbumContent2Span.length; i++){
	myAlbumContent2Span[i].onclick = function(){
		if(this.style.background == "rgb(216, 76, 49)"){
			this.style.background="rgb(255, 255, 255)";
			this.style.color="#8b8be8";
		}
		else{
			this.style.background="#D84C31";
		 	this.style.color="rgb(255, 255, 255)";
		}
	}
}
//点击移动我的分组
var adminButtonMenu=document.getElementById('admin-button-menu');
var adminButtonMenuLi = adminButtonMenu.getElementsByTagName('li');
var chooseGroup = document.getElementById('choose-group');
for(var i=0; i<adminButtonMenuLi.length; i++){
	adminButtonMenuLi[i].onclick = function(){
		// alert(this.innerHTML)
		document.getElementById('popLayer2').style.display="block";
		document.getElementById('choose-group').style.display="block";
		document.getElementById('choose-group-span').innerHTML=this.innerHTML;
	}
}
var iconChacha9=document.getElementById('iconChacha9');
iconChacha9.onclick = function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('choose-group').style.display="none";
}
var chooseGroupButton1=document.getElementById('choose-group-button1');
chooseGroupButton1.onclick = function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('choose-group').style.display="none";
}
//点击删除选中
var button2=document.getElementById('button2');
var iconChacha11=document.getElementById('iconChacha11');
var deleteGroupButton1=document.getElementById('delete-group-button1');
button2.onclick = function(){
	document.getElementById('popLayer2').style.display="block";
	document.getElementById('delete-group').style.display="block";
}
iconChacha11.onclick = function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('delete-group').style.display="none";
}
deleteGroupButton1.onclick = function(){
	document.getElementById('popLayer2').style.display="none";
	document.getElementById('delete-group').style.display="none";
}


//编辑相册
var modAlbum = document.getElementById('mod-album');
var uploadPhoto4 = document.getElementById('uploadPhoto4');
var closeMod = document.getElementById('close-mod');
uploadPhoto4.onclick = function(){
	modAlbum.style.display="block";
	popLayer2.style.display="block";
}
closeMod.onclick = function(){
	modAlbum.style.display="none";
	popLayer2.style.display="none";
}