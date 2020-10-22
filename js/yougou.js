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
//图片透明特效1
var woman1 = document.getElementById("woman1");
var sttaco1 = document.getElementById("sttaco1");
var woman2 = document.getElementById("woman2");
var sttaco2 = document.getElementById("sttaco2");
var woman3 = document.getElementById("woman3");
var sttaco3 = document.getElementById("sttaco3");
woman1.onmouseover = function(){
    sttaco1.style.display = "block";
}
woman1.onmouseout = function(){
    sttaco1.style.display = "none";
}
woman2.onmouseover = function(){
    sttaco2.style.display = "block";
}
woman2.onmouseout = function(){
    sttaco2.style.display = "none";
}
woman3.onmouseover = function(){
    sttaco3.style.display = "block";
}
woman3.onmouseout = function(){
    sttaco3.style.display = "none";
}
//图片透明特效2
var shoes1 = document.getElementById("shoes1");
var p1 = document.getElementById("p1");
var shoes2 = document.getElementById("shoes2");
var p2 = document.getElementById("p2");
var shoes3 = document.getElementById("shoes3");
var p3 = document.getElementById("p3");
var shoes4 = document.getElementById("shoes4");
var p4 = document.getElementById("p4");
shoes1.onmouseover = function(){
    p1.style.display = "block";
}
shoes1.onmouseout = function(){
    p1.style.display = "none";
}
shoes2.onmouseover = function(){
    p2.style.display = "block";
}
shoes2.onmouseout = function(){
    p2.style.display = "none";
}
shoes3.onmouseover = function(){
    p3.style.display = "block";
}
shoes3.onmouseout = function(){
    p3.style.display = "none";
}
shoes4.onmouseover = function(){
    p4.style.display = "block";
}
shoes4.onmouseout = function(){
    p4.style.display = "none";
}


var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:({
        delay:3000
    }),
    // 如果需要分页器
    pagination: {
    el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
    el: '.swiper-scrollbar',
    },
}) 

//限时抢购
function djs(){
    var target=new Date()
    var from = new Date("2020-11-11 00:00:00");
    target=target.getTime()
    from=from.getTime()
    var differenceTime=from-target
    differenceTime=parseInt(differenceTime/1000)
    var day=Math.floor(differenceTime/(24*60*60))
    var afterHours=differenceTime-day*24*60*60
    var hours=Math.floor(afterHours/3600);
    var afterMinutes=afterHours-hours*3600;
    var minutes=Math.floor(afterMinutes/60);
    var seconds=afterMinutes-minutes*60
    var arr=[day,hours,minutes,seconds]
    console.log('相差'+day+'天'+hours+'小时'+minutes+'分'+seconds+'秒')
    var spanArr=document.getElementsByClassName('ms-d')
    console.log(spanArr);
    for(var i=0;i<spanArr.length;i++){
        spanArr[i].innerHTML=arr[i]
    }
}
djs()
timer=setInterval(function(){
    djs()
},1000)