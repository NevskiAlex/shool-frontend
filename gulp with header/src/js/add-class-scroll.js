$(function() {
    //caches a jQuery object containing the header element
    var header = $("body");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            header.addClass("scroll");
        } else {
            header.removeClass("scroll");
        }
    });
});