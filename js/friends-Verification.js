var friendsVerification=document.getElementById('friends-Verification');
//点击消息
friendsVerification.onclick = function(){
	document.getElementById('Verification').style.display="block";
	document.getElementById('popLayer').style.display="block";

}

//	color: #000;
//	border-bottom: 2px solid #D84C31;
//关闭消息
var iconChacha10=document.getElementById('iconChacha10');
iconChacha10.onclick = function(){
	document.getElementById('Verification').style.display="none";
	document.getElementById('popLayer').style.display="none";

}

//收到消息
var accept=document.getElementById('accept');
accept.style.color="#000";
accept.style.borderBottom="2px solid #D84C31";
accept.onclick = function(){
	document.getElementById('accept-Verification').style.display="block";
	document.getElementById('send-Verification').style.display="none";
	accept.style.color="#000";
	accept.style.borderBottom="2px solid #D84C31";

	send.style.color="#9999A6";
	send.style.borderBottom="";
}
//发出验证
var send=document.getElementById('send');
send.onclick = function(){
	document.getElementById('send-Verification').style.display="block";
	document.getElementById('accept-Verification').style.display="none";
	send.style.color="#000";
	send.style.borderBottom="2px solid #D84C31";

	accept.style.color="#9999A6";
	accept.style.borderBottom="";
}
// var VerificationMenu=document.getElementById('Verification-menu');
// var VerificationMenuLi = VerificationMenu.getElementsByTagName('li');
// for(var i=0; i < VerificationMenuLi.length; i++){
// 	VerificationMenuLi[i].onclick = function(){
// 		var aL = this.getElementsByTagName('a');
// 		alert(aL.length)
// 		aL[0].style.color="#000";
// 		//aL[0].style.borderBottom="2px solid #D84C31";
// 	}
// }	color: #9999A6;

//点击接受
var acceptFriends = document.getElementById('accept-friends');
var acceptFriendsButton1 = document.getElementById('accept-friends-button1');
var iconChacha8 = document.getElementById('iconChacha8');

var acceptFriendsGroup = document.getElementById('accept-friends-group');
var acceptFriendsGroupLi = acceptFriendsGroup.getElementsByTagName('li');
var acceptFriendsLeft = document.getElementById('accept-friends-left');
var acceptFriendsRight = document.getElementById('accept-friends-right');

function acceptfriendsbutton(){
	acceptFriends.style.display="block";
	document.getElementById('popLayer2').style.display="block";
}
acceptFriendsButton1.onclick = function(){
	acceptFriends.style.display="none";
	document.getElementById('popLayer2').style.display="none";
}
iconChacha8.onclick = function(){
	acceptFriends.style.display="none";
	document.getElementById('popLayer2').style.display="none";
}

var acceptLi="";
acceptFriendsRight.onclick = function(){
	acceptFriendsGroup.style.display="block"
}
for(var i=0;i<acceptFriendsGroupLi.length;i++){
	acceptFriendsGroupLi[i].index = i;
	acceptFriendsGroupLi[i].onclick = function(){
		str = (function(i){
			acceptLi=acceptFriendsGroupLi[i].innerHTML;
			acceptFriendsLeft.innerHTML=acceptLi;
			return acceptFriendsLeft.innerHTML;
		})(this.index);
		acceptFriendsGroup.style.display="none"
		acceptFriendsLeft.innerHTML=str
	}
}