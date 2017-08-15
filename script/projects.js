$(".navHamburger").on("click", function() {
    $(".mobileNav").slideToggle();
});

$("#container").on("click", function() {
    $(".mobileNav").css("display", "none");
});