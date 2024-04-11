// progress bar code
window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



// for scrolling down smooth on clicking browse button

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        if ($target.length) {
            var weAreHere = $("#myDivWithScrollBar").scrollTop();
            var distance = $target.offset().top - 220;
            var weAreGoing = weAreHere + distance;

            $('#myDivWithScrollBar').animate({
                scrollTop: weAreGoing
            }, 1000); // duration set to 1000 milliseconds (1 second)
            return false;
        }
    });
});
