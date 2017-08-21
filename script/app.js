var myVideo = $("#video");
var wordsContainer = $("#slidingWords");
var words = ["Welcome!", "Scroll down to learn more about me.", "To summarize ...", "I am a Junior Web Developer", "I love to learn", "And I really enjoy snowboarding", "Enjoy!"];
var position = 0;

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

$("#downArrow").on("click", function () {
    $('html, body').animate({
        scrollTop: $("#contentContainer").offset().top
    }, 1000);
});

setTimeout(typedText, 4000);

function typedText() {
    if(position >= words.length) {
        position = 0;
    }
    placeText(0, words[position].length);

}




function placeText(i, stop) {
    if(i >= stop) {
        setTimeout(function () {
            removeText(0, stop);
        }, 4000);
        position++;

    } else {
        wordsContainer.append("<span>" + words[position][i] + "</span>");
        i++;
        setTimeout(function () {
            placeText(i, stop);
        }, 40);
    }
}


function removeText(i, stop) {
    if(i >= stop) {
        setTimeout(typedText, 500);
    } else {
        $("#slidingWords span:last-child").remove();
        i++;
        setTimeout(function () {
            removeText(i, stop);
        }, 40);
    }
}