define(['jquery', 'template', 'template2', 'swiper', 'text!../tql/tab1.html', 'text!../tql/tab2.html', 'bscroll'],
    function($, template, template2, swiper, tab1, tab2, bscroll) {
        $.getJSON('/book/index', function(d) {

            var obj = {};
            d.items.map(function(v, i) {
                obj["data" + i] = v;
            });
            template(tab1, obj, "#tab1");
            new swiper('.banner', {
                loop: true,
                autoplay: {
                    delay: 1000
                }
            })
            var myswiper = new swiper('.main2', {
                on: {
                    slideChange: function() {
                        var ind = myswiper.activeIndex;
                        $(".header p").eq(ind).addClass("one").siblings().removeClass("one");
                    }
                }
            });
            $(".header").on("click", "p", function() {
                var n = $(this).index();
                $(".header p").eq(n - 1).addClass("one").siblings().removeClass("one");
                myswiper.slideTo(n - 1);
            });
        });




        // 加载
        var init = 0,
            limit = 5;
        var maxPage = 3;
        $('.main3').on("scroll", scrollload);

        function scrollload() {
            var t = $(this).scrollTop() + $(this).height();
            var last = $(".loading").position().top;
            if (t > last) {
                $(this).off('scroll');
                init++;
                if (init > maxPage) {
                    $('.loading').html('已经到底了!');
                    return false;
                }
                setTimeout(function() {
                    $.getJSON('/book/list', { init: init }, function(data) {
                        console.log(data);
                        template(tab2, data, "#tab1");
                        $('.main3').on("scroll", scrollload);
                    })
                }, 1000);

            }
        }
    });