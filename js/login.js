var atten = document.getElementById("atten");
var dload = document.getElementById("dload");
var app = document.getElementsByClassName("app")[0];
var wechat = document.getElementsByClassName("wechat")[0];
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


$("#login_sub").click(function(){
    console.log($("#username").val());
    console.log($("#password").val());

    $.ajax({
        url:'../php/login.php',
        type:'get',
        data:{username:$("#username").val(),password:$("#password").val()},
        success:function(res){
            console.log(res);
            var i = JSON.parse(res);
            console.log(i.code);
            if(res){
                location.href = '../html/yougou.html'
            }else{
                alert("登录失败")
            }
        },
        error:function(){
            console.log('失败的回调')
        },
        // dataType:'json'
    
    })
    
})