var date = new Date();
var year = date.getFullYear();
$("#year").text(year);

$(".navHamburger").on("click", function() {
    $(".mobileNav").slideToggle();
});

$("#container").on("click", function() {
    $(".mobileNav").css("display", "none");
});
