/**
 * Created by Administrator on 2015/5/15.
 */

$(document).ready(function(){
  // alert("s");
    $(".s1").click(function(){
        $(this).css("background"," url(img/login/checked.png) no-repeat");
        $(".s2").css("background"," url(img/login/check.png) no-repeat");

    });
    $(".s2").click(function(){
        $(this).css("background"," url(img/login/checked.png) no-repeat");
        $(".s1").css("background"," url(img/login/check.png) no-repeat");

    });


    $(".name").mouseover(function(){
        $("#naicon").css("background"," url(img/login/usernameicon2.png)");

    })
    $(".name").mouseout(function(){
        $("#naicon").css("background"," url(img/login/usernameicon.png)");

    })

    $(".password").mouseover(function(){
        $("#pwicon").css("background"," url(img/login/passwordicon2.png)");

    })
    $(".password").mouseout(function(){
        $("#pwicon").css("background"," url(img/login/passwordicon.png)");

    })
});