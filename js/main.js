$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct < 300) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.main_visual .stop').on('click', function () {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
    $('.main_visual .play').on('click', function () {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
    $(".main_visual .pause").on("click", function () {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });




    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.main_product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.main_product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })


    $('.event_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.main_event .arrows .left').on('click', function () {
        $('.event_slide').slick('slickPrev');
    })
    $('.main_event .arrows .right').on('click', function () {
        $('.event_slide').slick('slickNext');
    })

})