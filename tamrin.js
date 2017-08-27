$("#slider-container img").hide();
$("#slider-container :first-child").show();
function showNext(){
   $("#slider-container :first-child").fadeOut(2000).next("img").fadeIn().end().appendTo("#slider-container");
}
function showPrev(){
    $("#slider-container :last-child").fadeOut(2000).prev("img").fadeIn().end().appendTo("#slider-container");
}
setInterval(showNext,5000);