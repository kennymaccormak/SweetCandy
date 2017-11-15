function Slide2(selector) {
    var s = $(this);
    s.slide = $(selector);
    s.scrollArea = s.slide.find(".slide-2-content__wrap");
    s.scrollContent = s.scrollArea.find(".simplebar-scroll-content");
    s.scrollVertical = s.scrollArea.find(".simplebar-track.vertical");
    s.scrollVerticalTrack = $("<div>", {
        "class": "simplebar-scrollbar-track"
    });
    s.scrollVertical.append(s.scrollVerticalTrack);

    s.showHideScrollTrack = function (param) {
        s.scrollVerticalTrack.css({"opacity": param});
    };

    s.scrollContent.mouseover(function () {
        s.showHideScrollTrack(1)
    });
    s.scrollContent.mouseout(function () {
        s.showHideScrollTrack(0)
    })
}

$(function () {
    var slide2 = new Slide2(".slide-2");
});