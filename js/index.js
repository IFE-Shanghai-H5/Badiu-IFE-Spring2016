/**
 * Created by ztadmin on 16/3/10.
 */

$(document).ready(function(e){

    function windowChange(){
        $('header').height($(window).height())
    }
    windowChange()
    $(window).resize(windowChange)

    $(".ic-wechat").click(function(){
        $(".qrcode").fadeToggle()

    });
    
    $(".qrcode").click(function () {
        $(".qrcode").fadeOut();
});

});



