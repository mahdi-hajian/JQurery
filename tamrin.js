//تفاوت val و html
//ول برای جاهایی ک ولیو میگیرد مثل تکست و اچ تی ام ال برای مثلا دکمه ها ک وسط دستور دو باتن متن را مینویسی
$(document).ready(function () {
    $("#btnval").click(function () {
        var name = $("#txtval").val(); //give text from textbox  //if not val no ansver
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
    //برای متن داخل تکست فقط باید از دو دستور پایین استفاده کرد ک داخل خوده تکست باکس بنویسد
    $("#btnappend").click(function () {

        var dif = $("#txtdifrent").val()
        $("#btnappend").append(dif);

    })
    $("#btnprepend").click(function () {

        var dif = $("#txtdifrent").val()
        $("#btnprepend").prepend(dif);

    })

});
