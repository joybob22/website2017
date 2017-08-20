var myVideo = $("#video");

function playVideo() {
    myVideo[0].load();
    myVideo[0].play();
}

$(".navHamburger").on("click", function() {
    $(".mobileNav").slideToggle();
});

$(".overlay").on("click", function() {
    $(".mobileNav").css("display", "none");
});