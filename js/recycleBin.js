var recycleTable = document.getElementById('recycle-table');
var recycleTableTr = recycleTable.getElementsByTagName('tr');
//点击勾勾
function dianjigou() {
    var flag = document.getElementById("all").checked;
    var cks = document.getElementsByName("photo"); 
    if (flag) { 
        for ( var i = 0; i < cks.length; i++) { 
            cks[i].checked = true;  
        }
        document.getElementById('table-header5').style.display="block";
    }
    else {
        for ( var i = 0; i < cks.length; i++) { 
            cks[i].checked = false;       
        }
        document.getElementById('table-header5').style.display="none";
    }  
}
for(var i=0;i<recycleTableTr.length;i++){
    var aInput=this.document.getElementsByTagName('input')
    for(var j=1;j<aInput.length;j++){
        aInput[j].onchange = function(){
            document.getElementById('table-header5').style.display="block";
        }
    }
}

// for(var i=1; i<recycleTableTr.length; i++){
//     var recycleTableTrButton1 = recycleTableTr[i].getElementsByTagName('td');
//     var recycleTableTrButton = recycleTableTrButton1[6].getElementsByTagName('button');
//     //点击查看
//     recycleTableTrButton[0].onclick = function(){
//         document.getElementById('see-photo').style.display="block";
        
//     }
//     //点击删除
//     recycleTableTrButton[1].onclick = function(){

//     }
//     //点击还原
//     recycleTableTrButton[2].onclick = function(){

//     }
// }
// var iconChacha3 = document.getElementById('iconChacha3');
// iconChacha3.onclick = function(){
//     document.getElementById('see-photo').style.display="none";
//     document.getElementById('popLayer2').style.display="block";
// }
//清空回收站
var deleteAll = document.getElementById('deleteAll');
deleteAll.onclick = function(){
    document.getElementById('delete-recycle').style.display="block";
    document.getElementById('popLayer2').style.display="block";
}
//删除选中
var button2 = document.getElementById('button2');
button2.onclick = function(){
    document.getElementById('delete-recycle2').style.display="block";
    document.getElementById('popLayer2').style.display="block";
}
//删除选中 -> 取消
var iconChacha3 = document.getElementById('iconChacha3');
var deleteRecycleButton3 = document.getElementById('delete-recycle-button3');
iconChacha3.onclick = function(){
    document.getElementById('delete-recycle2').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    document.getElementById("delete-recycle-input2").value="";
}
deleteRecycleButton3.onclick = function(){
    document.getElementById('delete-recycle2').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    document.getElementById("delete-recycle-input2").value="";
}
//清空回收站 -> 取消
var iconChacha1 = document.getElementById('iconChacha1');
var deleteRecycleButton1 = document.getElementById('delete-recycle-button1');
iconChacha1.onclick = function(){
    document.getElementById('delete-recycle').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    document.getElementById("delete-recycle-input").value="";
}
deleteRecycleButton1.onclick = function(){
    document.getElementById('delete-recycle').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    document.getElementById("delete-recycle-input").value="";
}
//还原回收站
var updateAll = document.getElementById('updateAll');
updateAll.onclick = function(){
    document.getElementById('update-recycle').style.display="block";
    document.getElementById('popLayer2').style.display="block";
}
var iconChacha2 = document.getElementById('iconChacha2');
var updateRecycleButton1 = document.getElementById('update-recycle-button1');
//还原回收站 ->取消
var updateRecycleLeft = document.getElementById('update-recycle-left');
var updateRecycleRight = document.getElementById('update-recycle-right');
var updateRecycleGroup = document.getElementById('update-recycle-group');
var updateRecycleGroupLi = updateRecycleGroup.getElementsByTagName('li');

iconChacha2.onclick = function(){
    document.getElementById('update-recycle').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    updateRecycleGroup.style.display="none";
    updateRecycleLeft.innerHTML="陌生人";
    document.getElementById('select-jiantou').style.color="#E0E0E0";
}
updateRecycleButton1.onclick = function(){
    document.getElementById('update-recycle').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    updateRecycleGroup.style.display="none";
    updateRecycleLeft.innerHTML="陌生人";
    document.getElementById('select-jiantou').style.color="#E0E0E0";
}
//还原回收站 -> 相册
updateRecycleRight.onclick = function(){
    updateRecycleGroup.style.display="block";
    document.getElementById('select-jiantou').style.color="#000";
}
var aLi=""
for(var i=0; i<updateRecycleGroupLi.length; i++){
    updateRecycleGroupLi[i].index = i;
    updateRecycleGroupLi[i].onclick = function(){
        str = (function(i){
			aLi=updateRecycleGroupLi[i].innerHTML;
			updateRecycleLeft.innerHTML=aLi;
			return updateRecycleLeft.innerHTML;
		})(this.index);
		updateRecycleLeft.innerHTML=str
        updateRecycleGroup.style.display="none";
    }
}
//还原选中
var button1 = document.getElementById('button1');
button1.onclick = function(){
    document.getElementById('update-recycle2').style.display="block";
    document.getElementById('popLayer2').style.display="block";
}
//还原选中 -> 取消
var iconChacha4 = document.getElementById('iconChacha4');
var updateRecycleButton2 = document.getElementById('update-recycle-button2');

var updateRecycleLeft2 = document.getElementById('update-recycle-left2');
var updateRecycleRight2= document.getElementById('update-recycle-right2');
var updateRecycleGroup2 = document.getElementById('update-recycle-group2');
var updateRecycleGroupLi2 = updateRecycleGroup2.getElementsByTagName('li');

iconChacha4.onclick = function(){
    document.getElementById('update-recycle2').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    updateRecycleGroup2.style.display="none";
    updateRecycleLeft2.innerHTML="陌生人";
    document.getElementById('select-jiantou2').style.color="#E0E0E0";
}
updateRecycleButton2.onclick = function(){
    document.getElementById('update-recycle2').style.display="none";
    document.getElementById('popLayer2').style.display="none";
    updateRecycleGroup2.style.display="none";
    updateRecycleLeft2.innerHTML="陌生人";
    document.getElementById('select-jiantou2').style.color="#E0E0E0";
}
//还原回收站 -> 相册
updateRecycleRight2.onclick = function(){
    updateRecycleGroup2.style.display="block";
    document.getElementById('select-jiantou2').style.color="#000";
}
var aLi2=""
for(var i=0; i<updateRecycleGroupLi2.length; i++){
    updateRecycleGroupLi2[i].index = i;
    updateRecycleGroupLi2[i].onclick = function(){
        str = (function(i){
			aLi2=updateRecycleGroupLi2[i].innerHTML;
			updateRecycleLeft2.innerHTML=aLi;
			return updateRecycleLeft2.innerHTML;
		})(this.index);
		updateRecycleLeft2.innerHTML=str
        updateRecycleGroup2.style.display="none";
    }
}

//点击图片查看大图
$(function(){  
    $(".pimg").click(function(){  
        var _this = $(this);//将当前的pimg元素作为_this传入函数  
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });   
});  
$(function(){    
    $(".pimg2").click(function(){  
        var _this = $(this).parent().siblings().find(".pimg");//将当前的pimg元素作为_this传入函数  
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });  
}); 
function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src");//获取当前点击的pimg元素中的src属性  
    $(bigimg).attr("src", src);//设置#bigimg元素的src属性  
  
        /*获取当前点击图片的真实大小，并显示弹出层及大图*/  
    $("<img/>").attr("src", src).load(function(){  
        var windowW = $(window).width();//获取当前窗口宽度  
        var windowH = $(window).height();//获取当前窗口高度  
        var realWidth = this.width;//获取图片真实宽度  
        var realHeight = this.height;//获取图片真实高度  
        var imgWidth, imgHeight;  
        var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  
          
        if(realHeight>windowH*scale) {//判断图片高度  
            imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放  
            imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度  
            if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度  
                imgWidth = windowW*scale;//再对宽度进行缩放  
            }  
        } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度  
            imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放  
                        imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度  
        } else {//如果图片真实高度和宽度都符合要求，高宽不变  
            imgWidth = realWidth;  
            imgHeight = realHeight;  
        }  
                $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放  
          
        var w = (windowW-imgWidth)/2;//计算图片与窗口左边距  
        var h = (windowH-imgHeight)/2;//计算图片与窗口上边距  
        $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性  
        $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg  
    });  
      
    $(outerdiv).click(function(){//再次点击淡出消失弹出层  
        $(this).fadeOut("fast");  
    });  
}  




