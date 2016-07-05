$(document).ready(function () {
    $("#circleForBtn").hide();


    setTimeout(function () {
        $('#TB_overlay2').addClass("appearance");
    }, 500);
    setTimeout(function () {
        $('#TB_overlay2').css({"display": "none"});
    }, 1500);

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
    });

    var icoName = $('#form div i:first');
    var icoPass = $('#form div i:last');

    $("#inputPass").css({"letterSpacing": 1});


    $("#inputUserName").focus(function () {
        var patt = /^[a-z0-9_-]{3,16}$/;
        setInterval(function () {
            $('#inputUserName').parent().removeClass('error success');
            icoName.removeClass('errorIcon successIcon');
            var name = $('#inputUserName').val();
            if (patt.test(name)) {
                $('#inputUserName').parent().addClass('success');
                icoName.addClass('successIcon');
            } else {
                $('#inputUserName').parent().addClass('error');
                icoName.addClass('errorIcon');
            }
        }, 1000);
    });

    $("#inputPass").focus(function () {
        var patt = /^[a-z0-9_-]{6,18}$/;
        setInterval(function () {
            $('#inputPass').parent().removeClass('error success');
            icoPass.removeClass('errorIcon successIcon');
            var name = $('#inputPass').val();
            if (patt.test(name)) {
                $('#inputPass').parent().addClass('success');
                icoPass.addClass('successIcon');
            } else {
                $('#inputPass').parent().addClass('error');
                icoPass.addClass('errorIcon');
            }
        }, 500);
    });


    $("#btnSingIn").click(function () {
        if (icoName.hasClass('successIcon') && icoPass.hasClass('successIcon')) {
            setTimeout(function () {
                $("#circleForBtn").hide();
                $("#btnSingIn").animate({
                    fontSize: 0,
                    backgroundColor: "#ffff4b"
                }, 10).addClass('ripple');
            }, 5000);
            setTimeout(function () {
                var url = "http://localhost:49890/form/second.html?_ijt=2r3jagral2ulf46tasucjgr07f";
                $(location).attr('href', url);
            }, 6000);

            $("#btnSingIn").animate({
                width: "14",
                fontSize: 0,
                backgroundColor: "#ffff4b"
            }, 300);
            setTimeout(function () {
                $("#circleForBtn").show();
            }, 400);
        } else {


            if (!icoName.hasClass('successIcon') && !icoName.hasClass('successIcon')) {
                $('#inputPass').parent().addClass('shake-horizontal shake-constant');
                $('#inputUserName').parent().addClass('shake-horizontal shake-constant');
                $('#inputPass').parent().addClass('error');
                icoPass.addClass('errorIcon');
                $('#inputUserName').parent().addClass('error');
                icoName.addClass('errorIcon');


            } else if (icoName.hasClass('successIcon')) {
                $('#inputPass').parent().addClass('shake-horizontal shake-constant');
                $('#inputPass').parent().addClass('error');
                icoPass.addClass('errorIcon');
            } else {
                $('#inputUserName').parent().addClass('shake-horizontal shake-constant');
                $('#inputUserName').parent().addClass('error');
                icoName.addClass('errorIcon');
            }
        }
        setTimeout(function () {
            $('#inputPass').parent().removeClass('shake-horizontal shake-constant');
            $('#inputUserName').parent().removeClass('shake-horizontal shake-constant');
        }, 500)
    });


});



