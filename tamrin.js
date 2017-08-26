$(document).ready(function () {
    $("#btnHide").click(function () {
        $("#google").hide();
    });

    $("#btnShow").click(function () {
        $("#google").show();
    });

    $("#btnToggle").click(function () {
        $("#google").toggle();
    });

    $("#btnFadein").click(function () {
        $("#google").fadeIn();
    });

    $("#btnFadeout").click(function () {
        $("#google").fadeOut();
    });

    $("#btnFadetoggle").click(function () {
        $("#google").fadeToggle();
    });

    $("#btnsLideUp").click(function () {
        $("#google").slideUp();
    });

    $("#btnsLideDown").click(function () {
        $("#google").slideDown();
    });

    $("#btnsLideToggle").click(function () {
        $("#google").slideToggle();
    });

    //                $("#btnsLideToggle").click(function () {
    //        $("#google").slideToggle();
    //    });

    $("#Animate").click(function () {
        $("#google").animate({
            left: "300px",
            opacity: "0.5px",
            height: "50px",
            width: "150"
        });
    });

});
