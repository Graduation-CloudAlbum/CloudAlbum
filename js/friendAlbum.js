//点击相册
//myAlbum-menu1
var friendAlbumContent=document.getElementById('friendAlbum-content');
var friendAlbumContentLi=friendAlbumContent.getElementsByTagName('li');
var friendAlbumContent2=document.getElementById('friendAlbum-content2');
var open=document.getElementById('open');
var open2=document.getElementById('open2');
var a="";
for(var i=0;i<friendAlbumContentLi.length;i++){
	friendAlbumContentLi[i].onclick=function(){
		friendAlbumContent.style.display="none";
		friendAlbumContent2.style.display="block";
		open.style.display="none";
		open2.style.display="block";

	}
}

//移动好友
var moveFriendsGroup = document.getElementById('moveFriends-group');
var moveFriends = document.getElementById('move-friends');
var friendGroup = document.getElementById('friend-group');
var friendGroupLi = friendGroup.getElementsByTagName('li');
var moveFriendsButton1 = document.getElementById('move-friends-button1');
var iconChacha11 = document.getElementById('iconChacha11');
var fLi=""
for(var i=0; i<friendGroupLi.length;i++){
	friendGroupLi[i].index = i;
	friendGroupLi[i].onclick = function(){
		moveFriends.style.display="block";
		popLayer2.style.display="block";
		str = (function(i){
			fLi=friendGroupLi[i].innerHTML;
			moveFriendsGroup.innerHTML=fLi;
			return moveFriendsGroup.innerHTML;
		})(this.index);
		moveFriendsGroup.innerHTML=str
	}
}
moveFriendsButton1.onclick = function(){
	moveFriends.style.display="none";
	popLayer2.style.display="none";
}
iconChacha11.onclick = function(){
	moveFriends.style.display="none";
	popLayer2.style.display="none";
}

//删除好友
var deleteFriends = document.getElementById('delete-friends');
var deleteFriendsPop = document.getElementById('delete-friends-pop');
var deleteFriendsButton1 = document.getElementById('delete-friends-button1');
var iconChacha12 = document.getElementById('iconChacha12');
deleteFriends.onclick = function(){
	deleteFriendsPop.style.display = "block";
	popLayer2.style.display="block";
}
deleteFriendsButton1.onclick = function(){
	deleteFriendsPop.style.display="none";
	popLayer2.style.display="none";
}
iconChacha12.onclick = function(){
	deleteFriendsPop.style.display="none";
	popLayer2.style.display="none";
}