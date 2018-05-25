define(['jquery', 'handlebars', 'template', 'text!../tql/tab3.html'], function($, hand, template, tab3) {
    var init = 2;
    $.getJSON('/book/list', { init: init }, function(b) {
        template(tab3, b, ".index2");
    });
    var check = true;

    $('.djj').click(function() {
        if (check === false) {
            check = true;
            $('.nav8').removeClass('nav8').addClass('nav7');
            $('.djj').css('background', 'url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01yLF3fEj8l/b7UfAdlfufQKML.png) no-repeat center');

        } else {
            $('.djj').css('background', 'url(http://image.read.duokan.com/mfsv2/download/fdsc3/p014nDc0lHYW/lDeZ3lL4nmgnmf.png) no-repeat center')
            $('.nav7').removeClass('nav7').addClass('nav8');
            check = false;


        }

    })
});