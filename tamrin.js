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

});
