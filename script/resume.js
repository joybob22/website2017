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