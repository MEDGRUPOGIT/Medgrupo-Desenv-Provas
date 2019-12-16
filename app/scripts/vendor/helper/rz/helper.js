$().ready(readyFunction);

var rzObject = {};
rzObject.location = 'index';

function readyFunction() {
    $.responsivizr({
        helper : 'dev',
        debug : 1,
        overlay: overlayImg
    });
    if(autoShow){
        $('.switch').click();
    }
}


(function($) {

    $.responsivizr = function (opts) {
        var defaults = {
            "helper" : false,
            "debug" : false,
            "overlay" : false
        };
        $.rz.options = $.extend(defaults, opts);
        $.rz.helper();
    };

    $.rz = {

        options : '',
        // HELPER OVERLAY FUNCTION (SHOWS SIZE INFO AND OVERLAY MOCKUPS)
        helper: function () {
            if (!$('.rz-helper').length){
                $('<div class="rz-helper"><span class="size"></span> <a href="javascript:;" class="switch">Toggle Overlay</a> <a href="javascript:;" class="cookie-crush">Reset Overlay</a></div>').appendTo('body');
            }
            if ($.rz.options.helper == 'dev') {
                $('.rz-helper').addClass('dev');

                if($.rz.options.overlay){
                    $(document).on('click', '.rz-helper .switch', function () {
                        if($('.rz-overlay').length){
                            $( ".rz-overlay" ).toggle();
                            $('html').toggleClass('whiteout');
                        }
                        else {
                            $('html').addClass('whiteout');

                            var cookieName = 'rzObject.' + rzObject.location;
                            var position = '-4.-4';
                            if ($.cookie(cookieName) !== undefined) {
                                position= $.cookie(cookieName);
                            }
                            var posArray = position.split('.');
                            $('<div class="rz-overlay"><img style="left: ' +posArray[0]+ 'px; top: ' +posArray[1]+ 'px; " src="' + $.rz.options.overlay + '"/></div>').appendTo('body');
                            dragElem = $( ".rz-overlay img" )[0];
                            $('.rz-overlay img').on('dragstart', function(event) { event.preventDefault(); });

                            var draggie = new Draggabilly( dragElem, {});

                            draggie.on( 'dragEnd', function() {
                                var x = parseInt($('.rz-overlay img').css('left'), 10);
                                var y = parseInt($('.rz-overlay img').css('top'), 10);
                                position = x +'.'+ y;
                                $.cookie(cookieName, position, {expires:60});
                                console.log('Overlay Helper Position: ', position);
                            });

                            document.onkeydown = checkKey;
                            function checkKey(e) {
                                e = e || window.event;

                                var x = parseInt($('.rz-overlay img').css('left'), 10);
                                var y = parseInt($('.rz-overlay img').css('top'), 10);
                                var isValidControl = false;

                                if (e.keyCode == '37') {
                                    // left arrow
                                    x--;
                                    isValidControl = true;
                                }
                                if (e.keyCode == '39') {
                                    // right arrow
                                    x++;
                                    isValidControl = true;
                                }
                                if (e.keyCode == '38') {
                                    // up arrow
                                    y--;
                                    isValidControl = true;
                                }
                                if (e.keyCode == '40') {
                                    // down arrow
                                    y++;
                                    isValidControl = true;
                                }

                                if (!isValidControl) return;

                                $('.rz-overlay img').css('left', x);
                                $('.rz-overlay img').css('top', y);

                                position = x +'.'+ y;
                                $.cookie(cookieName, position, {expires:60});
                                console.log('Overlay Helper Position: ', position);
                            }
                        }
                    });

                    $(document).on('click', '.rz-helper .cookie-crush', function (){
                        $.removeCookie('rzObject.' + rzObject.location);
                        $('.rz-overlay img').css('left', -4);
                        $('.rz-overlay img').css('top', -4);
                    });
                }

            }
            var mapper = {
                "good-size" : "Good width, 950px or more",
                "bad-size" : "Warning: Increase window width to 950px or more"
            };
            function sizer() {
                $('.rz-helper .size').text('Size: ' + $(window).width() + ' x ' + $(window).height());
            };
            $(window).on('resize', function() {
                sizer();
            });
            sizer();
        }
    };

})(jQuery);