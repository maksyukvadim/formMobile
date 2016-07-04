$(document).ready(function () {
    $("#circleForBtn").hide();
    $("#btnSingIn").click(function () {
        $("#btnSingIn").animate({
            width: "14",
            fontSize: 0,
            backgroundColor: "#ffff4b"
        }, 300);
        setTimeout(function () {
            $("#circleForBtn").show();
        }, 400);
    });

    setTimeout(function () {
        $("#circleForBtn").hide();
        $("#btnSingIn").animate({
            fontSize: 0,
            backgroundColor: "#ffff4b"
        }, 10).addClass('ripple');
    }, 5000);

    $(".button-collapse").sideNav();
    
    var tempScrollTop, currentScrollTop = 0;
    jQuery(window).scroll(function () {
        currentScrollTop = jQuery(window).scrollTop();
        if (tempScrollTop < currentScrollTop) {
            $('#btnAdd').addClass('hideBtnAdd').removeClass("showBtnAdd");
        }
        else if (tempScrollTop > currentScrollTop) {
            $('#btnAdd').addClass('showBtnAdd').removeClass("hideBtnAdd");
        }
        tempScrollTop = currentScrollTop;
    })


});



