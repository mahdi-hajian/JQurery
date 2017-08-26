$(document).ready(function () {
    $("#btnAnimate1").click(function () {
        $("#blueSpace").animate({
            width: "600px",
        }, 1000).animate({
            height: "500px"
        }, 890);

        $("#fontofblueSpace").animate({
            left: "220px"
        }, 1200).animate({
            top: "205px"
        }, 1000)
    });

    $("#btnStop").click(function () {
        $("#blueSpace").stop();
        $("#blueSpace").stop();
        $("#fontofblueSpace").stop();
        $("#fontofblueSpace").stop();
    });

});

