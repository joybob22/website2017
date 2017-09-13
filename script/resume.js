var date = new Date();
var year = date.getFullYear();
$("#year").text(year);

$("#buttonToStart").on("click", function() {
    $("#arrow").toggleClass("hideContentRotate");
    $("#arrow").toggleClass("showContentRotate");
    $("#resumeContent").slideToggle();
    if($("#specialWord").text() === "Start") {
        $("#specialWord").text("End");
         $('html,body').animate({scrollTop: $(this).offset().top},500);
    } else {
        $("#specialWord").text("Start");
    }
});

$(".navHamburger").on("click", function() {
    $(".mobileNav").slideToggle();
});

$("#container").on("click", function() {
    $(".mobileNav").css("display", "none");
});