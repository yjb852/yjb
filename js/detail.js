//公告特效
var ads = document.getElementById("ads");
var adv = document.getElementsByClassName("adv")[0];
ads.onmouseover = function(){
    adv.style.display = "block";
}
ads.onmouseout = function(){
    adv.style.display = "none";
}
adv.onmouseover = function(){
    adv.style.display = "block";
}
adv.onmouseout = function(){
    adv.style.display = "none";
}
//头部特效
var atten = document.getElementById("atten");
var dload = document.getElementById("dload");
var app = document.getElementsByClassName("app")[0];
var wechat = document.getElementsByClassName("wechat")[0];
var subnav = document.getElementById("subnav");
var sport = document.getElementById("sport");
var girl = document.getElementById("girl");
var boy = document.getElementById("boy");
var outdoor = document.getElementById("outdoor");
var child = document.getElementById("child");
var bag = document.getElementById("bag");
girl.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
girl.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
boy.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
boy.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
outdoor.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
outdoor.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
child.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
child.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
bag.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
bag.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
sport.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
sport.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
subnav.onmouseover = function(){
    subnav.style.transform ="translateY(273px)";
    subnav.style.transition = "all 0.5s";
    
}
subnav.onmouseout = function(){
    subnav.style.transform ="translateY(0px)";
    
}
atten.onmouseover = function(){
    app.style.display = "block";
}
atten.onmouseout = function(){
    app.style.display = "none";
}
app.onmouseover = function(){
    app.style.display = "block";
}
app.onmouseout = function(){
    app.style.display = "none";
}
dload.onmouseover = function(){
    wechat.style.display = "block";
}
dload.onmouseout = function(){
    wechat.style.display = "none";
}
wechat.onmouseover = function(){
    wechat.style.display = "block";
}
wechat.onmouseout = function(){
    wechat.style.display = "none";
}
//放大镜
// var small = $id('small');//小图片所在的盒子
// 	var mask = $id('mask');//遮罩层
// 	var big = $id('big');//大图片所在的盒子
// 	var box = small.parentNode;//box盒子
// 	var bigImg = $id('bigImg');//大图
// 	//鼠标移入small中,mask显示,big也显示
// 	small.onmouseenter = function(){
// 		//mask显示,big也显示
// 		mask.style.display = "block";
// 		big.style.display = "block";
// 	}

// 	//鼠标移出small,mask隐藏,big隐藏
// 	small.onmouseleave = function(){
// 		//mask隐藏,big隐藏
// 		mask.style.display = "none";
// 		big.style.display = "none";
// 	}

// 	//mask可以移动
// 	small.onmousemove = function(e){
// 		//为了便于mask跟随鼠标定位,需要计算鼠标在small中的坐标
// 		var event = e || window.event;
// 		// var x = 鼠标距离页面左侧的距离(看的见的+看不见的) - small(box)距离页面左侧的距离
		
// 		//为了鼠标在mask中居中所以x,y都要减去mask的一半
// 		var x = event.clientX+getScroll().left - box.offsetLeft-mask.offsetWidth/2;
// 		var y = event.clientY+getScroll().top - box.offsetTop-mask.offsetHeight/2;
		
// 		//边界检测
// 		if(x<0){
// 			x = 0;
// 		}
// 		if(x>small.offsetWidth-mask.offsetWidth){
// 			x = small.offsetWidth-mask.offsetWidth;
// 		}
// 		if(y<0){
// 			y = 0;
// 		}
// 		if(y>small.offsetHeight - mask.offsetHeight){
// 			y = small.offsetHeight - mask.offsetHeight;
// 		}
// 		//定位mask
// 		mask.style.left = x+"px";
// 		mask.style.top = y+"px";

// 		// 当mask在small中移动,大图显示相应位置
// 		//x/small.offsetWidth = 大图片要偏移的距离/大图的宽度
// 		var left = x/small.offsetWidth*bigImg.offsetWidth;
// 		//y/small.offsetHeight = 大图片要偏移的距离/大图的高度
// 		var top = y/small.offsetHeight*bigImg.offsetHeight;
// 		bigImg.style.left = -left+"px";
// 		bigImg.style.top = -top+"px";

// 	}
//点击购物车,把商品加入数据库
 $('button').eq(0).click(function(){
    //  console.log($('input').val())
    $.ajax({
        url:'../php/addwq.php',
        data:{
            id:'13213242144',
            name:'老爹鞋',
            price:198,
            img:'../image/101415059_01_m.jpg',
            num:$('#input').val()
        },
        success:function(res){
            if(res.code){
                alert('商品加入成功')
            }    
        },
        dataType:'json'
    })
})
//点击查看购物车,进入购物车页面 
$('button').eq(1).click(function(){
    location.href="./cart.html"
})