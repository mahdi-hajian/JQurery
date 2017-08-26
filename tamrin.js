$(document).ready(function () {
    $("#btnval").click(function () {
        var name = $("#txtval").val();
        $("#txtresult").val(name);

    });

    $("#changehref").click(function () {
        $("#google").attr("href", "http://www.akj.com");

    });

    $("#btnchange").click(function () {
        var push = $("#txtbtnchange").val();
        $("#btnchange").html(push);
    });

    $("#btnafter").click(function () {
        var dif = $("#txtdifrent").val()
        $("#btnafter").after(dif);
    });

    $("#btnbefore").click(function () {

        var dif = $("#txtdifrent").val()
        $("#btnbefore").before(dif);

    })
    $("#btnappend").click(function () {

        var dif = $("#txtdifrent").val()
        $("#btnappend").append(dif);

    })
    $("#btnprepend").click(function () {

        var dif = $("#txtdifrent").val()
        $("#btnprepend").prepend(dif);

    })

});
