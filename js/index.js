var navFriend1 = document.getElementById('navFriend1');
var navFriend2 = document.getElementById('navFriend2');
var navFriend3 = document.getElementById('navFriend3');
function load_home1() {
     document.getElementById("main").innerHTML = '<object type="text/html" data="html/personalData.html" width="100%" height="100%"></object>';
 }
function load_home2() {
     document.getElementById("main").innerHTML = '<object type="text/html" data="html/myAlbum.html" width="100%" height="100%"></object>';
 }
function load_home3() {
     document.getElementById("main").innerHTML = '<object type="text/html" data="html/myFriend.html" width="100%" height="100%"></object>';
 }
 function load_home4() {
     document.getElementById("main").innerHTML = '<object type="text/html" data="html/recycleBin.html" width="100%" height="100%"></object>';
 }