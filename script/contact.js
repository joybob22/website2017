$(".navHamburger").on("click", function() {
    $(".mobileNav").slideToggle();
});

$("#contactContainer").on("click", function() {
    $(".mobileNav").css("display", "none");
});