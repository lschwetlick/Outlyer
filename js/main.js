$(document).ready(function($){
    console.log("Document is ready")
    var $w = $(window);
    var $l = $('#logo');
    var last_st =  $('#content').scrollTop();
    var win_w = $(window).innerWidth();
    var win_h= $(window).innerHeight();

    $l.css('width', (win_w*0.3)+"px");
    $l.css('left', ((win_w-_width)/2)+"px");
    $l.css('top', (win_h*0.7)+"px");    


    var _top = $("#logo").css("top");
    var _width = $("#logo").css("width");
    _top=parseFloat(_top.slice(0,-2))
    _width=parseFloat(_width.slice(0,-2))
    var orig_top= _top;
    var orig_width= _width;
    console.log(orig_top)
    console.log(last_st)
    var max_scroll=10000;

    $('#content').scroll(function(event) {
        // console.log(_top)
        // console.log("scroll "+last_st)
        var st =  $('#content').scrollTop();
        var amount_scrolled=Math.abs(last_st-st);
        // if(st>0 & st<max_scroll){
            // console.log("scroll "+st)
            if (st>last_st) {
                // console.log("logo move up")
                _top=_top-2*amount_scrolled;
                // _top=orig_top-st*10;
                _width=_width-1*amount_scrolled;
            } else if (st<last_st & st<win_h-win_h*0.5) {
                // console.log("logo move down")
                $('#top-banner').addClass('snap-off').removeClass('snap-on');
                _top=_top+2*amount_scrolled;
                // _top=orig_top+st*10;
                _width=_width+1*amount_scrolled;
            }
            
            if (_top<3) {
                _top=3;
                max_scroll=st;
                console.log("snap on")
                $('#top-banner').removeClass('snap-off').addClass('snap-on');
            }else if(_top>orig_top){
                _top=orig_top;
            }
            if (_width<150) {
                _width=150;
            } else if(_width>orig_width){
                _width=orig_width;
            }
            
            
            $l.css('width', _width+"px");
            $l.css('left', ((win_w-_width)/2)+"px");
            
            $l.css('top', _top+"px");    
            last_st=st;
        // }
        
    });

});


  
  
