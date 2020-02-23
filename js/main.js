$(document).ready(function ($) {
    enableSmoothScrolling();
    console.log("Document is ready")
    var $w = $(window);
    var $l = $('#logo');
    var last_st = $('#content').scrollTop();
    var win_w = $(window).innerWidth();
    var win_h = $(window).innerHeight();
    var perc_w_size = 0.3;
    var perc_h_pos = 0.7;
    if (win_h > win_w) {
        console.log("arr")
        perc_w_size = 0.7;
        perc_h_pos = 0.1;
        console.log(win_h * perc_h_pos)
    }
    $l.css('width', (win_w * perc_w_size) + "px");
    var _width = $("#logo").css("width");
    _width = parseFloat(_width.slice(0, -2))
    $l.css('left', ((win_w - _width) / 2) + "px");
    $l.css('top', (win_h * perc_h_pos) + "px");
    var _top = $("#logo").css("top");
    _top = parseFloat(_top.slice(0, -2))


    var orig_top = _top;
    var orig_width = _width;
    console.log(orig_top)
    console.log(last_st)
    var max_scroll = 10000;

    reset();

    $(window).resize(function () {

        reset();

    });

    $('#content').scroll(function (event) {

        var st = $('#content').scrollTop();
        var amount_scrolled = Math.abs(last_st - st);

        console.log(st)
        var st1 = Math.abs($('#section1').offset().top)
        var st2 = Math.abs($('#section2').offset().top)
        var st3 = Math.abs($('#section3').offset().top)
        if (st1 == Math.min(st1, st2, st3)) {
            console.log('1 is active')
            $('#s2-link').removeClass('active-sec')
            $('#s3-link').removeClass('active-sec')
        } else if (st2 == Math.min(st1, st2, st3)) {
            console.log('2 is active')
            $('#s2-link').addClass('active-sec')
            $('#s3-link').removeClass('active-sec')
        } else if (st3 == Math.min(st1, st2, st3)) {
            console.log('3 is active')
            $('#s3-link').addClass('active-sec')
            $('#s2-link').removeClass('active-sec')
        }


        // if(st>0 & st<max_scroll){
        // console.log("scroll "+st)
        if (st > last_st) {
            // console.log("logo move up")
            _top = _top - 2 * amount_scrolled;
            // _top=orig_top-st*10;
            _width = _width - 1 * amount_scrolled;
        } else if (st < last_st & st < win_h - win_h * 0.5) {
            // console.log("logo move down")
            $('#top-banner').addClass('snap-off').removeClass('snap-on');
            $("#logo-link").attr("href", "#section2")
            _top = _top + 2 * amount_scrolled;
            // _top=orig_top+st*10;
            _width = _width + 1 * amount_scrolled;
        }

        if (_top < 3) {
            _top = 3;
            max_scroll = st;
            console.log("snap on")
            $('#top-banner').removeClass('snap-off').addClass('snap-on');
            $("#logo-link").attr("href", "#section1")
        } else if (_top > orig_top) {
            _top = orig_top;
        }
        if (_width < 150) {
            _width = 150;
        } else if (_width > orig_width) {
            _width = orig_width;
        }

        $l.css('width', _width + "px");
        $l.css('left', ((win_w - _width) / 2) + "px");
        $l.css('top', _top + "px");
        last_st = st;
        // }

    });





    function enableSmoothScrolling() {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('#content').animate({
                        scrollTop: $('#content').scrollTop() + target.offset().top
                        // scrollTop: 2000
                    }, 1000);
                    return false;
                }
            }
        });
    }


    function reset() {
        $("#content").scrollTop(0);
        win_w = $(window).innerWidth();
        win_h = $(window).innerHeight();
        var $w = $(window);
        var $l = $('#logo');
        if ((win_w / win_h) < 0.9) {
            var perc_h_pos = 0.2;
        } else {
            var perc_h_pos = 0.7;
        }
        if ((win_w / win_h) < 1) {
            perc_w_size = 0.7;
        } else {
            perc_w_size = 0.3;
        }

        $l.css('width', (win_w * perc_w_size) + "px");
        _width = $("#logo").css("width");
        _width = parseFloat(_width.slice(0, -2))
        $l.css('left', ((win_w - _width) / 2) + "px");
        $l.css('top', (win_h * perc_h_pos) + "px");
        _top = $("#logo").css("top");
        _top = parseFloat(_top.slice(0, -2))
        orig_top = _top;
        orig_width = _width;
        return false
    }

});