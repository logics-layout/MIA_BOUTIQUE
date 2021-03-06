$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
var linkTop = $('.linkTop');
linkTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
    },
    scroll: function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 200){
            linkTop.addClass('active');
        }else{
            linkTop.removeClass('active');
        }
        // checkHeaderFix();
    },
    resize: function () {
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
if ($.fn.slick) {
//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
    $('.slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });

    $('.listItemSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-prev'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-next'></use></svg></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 452,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.item__img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
//
    var itemDetaliSlider = $('.detail-card__slider-view');
    var itemDetaliSliderPreview = $('.detail-card__slider-preview');
    itemDetaliSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        asNavFor: itemDetaliSliderPreview,
        appendDots: '.detail-card__slider-view-dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                }
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-prev'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-next'></use></svg></button>",
    });

    itemDetaliSliderPreview.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrows: true,
        asNavFor: itemDetaliSlider,
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-prev'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='8px' height='13px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-next'></use></svg></button>",
        responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             dots: false,
        //             arrows: false,
        //         }
        //     },
        ]
    });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });


// $('.collapse').find('.collapse-toggle').click(function(e){
//     e.preventDefault();
//     var _this = $(this),
//         content = _this.next(),
//         parentContent = _this.closest('.collapse-toggle-content')[0]?_this.closest('.collapse-toggle-content'):_this.closest('.collapse'),
//         time = 300,
//         className = 'active';
//
//     if(content.hasClass('collapse-toggle-content')){
//         content.slideToggle(time);
//         _this.parent().toggleClass(className);
//
//         parentContent.find('.collapse-toggle-content').not(content).stop().slideUp(time);
//         parentContent.find('.collapse-toggle').not(_this).parent().removeClass(className);
//     }
// });

$('.collapse__item-toggle').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        time = 300;

    _this.toggleClass('active');
    parent.find('.collapse__item-content').slideToggle(time);

    parent.siblings().each(function () {
        var _this = $(this);
        _this.find('.collapse__item-toggle').removeClass('active');
        _this.find('.collapse__item-content').slideUp(time);
    })
});

$('.lk__nav >li.parent > a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        time = 300;

    parent.toggleClass('active');
    parent.find('.lk__nav-toggle').stop().slideToggle(time);

    parent.siblings().each(function () {
        var _this = $(this);
        _this.removeClass('active');
        _this.find('.lk__nav-toggle').stop().slideUp(time);
    })
});


// var videoBlock = $('.videoBlock'),
//     videoBlockLabel = $('.videoBlock__label'),
//     videoBlockIframe = $('.videoBlock__main-iframe');
//
// videoBlockLabel.click(function(){
//     var _this = $(this);
//
//     _this.addClass('active').siblings().removeClass('active');
//     var iframe = _this.find('iframe');
//     if(iframe[0]){
//         videoBlockIframe.attr('src', iframe.attr('src'));
//     }
// });


function masonryReloadItems(indexTiles, metodClass) {
    metodClass = metodClass ? 'removeClass':'addClass';
    indexTiles.masonry('layout')[metodClass]('active');
    indexTiles.masonry('reloadItems');
}

if ($.fn.masonry) {
    var indexTiles = $('.object').masonry({
        itemSelector: '.object-item',
        columnWidth: ".grid-sizer",
        gutter: '.gutter-sizer',
        percentPosition: true
    });
    if (indexTiles[0]) {
        indexTiles.imagesLoaded().progress(function() {
            masonryReloadItems(indexTiles);
        });
    }
    var indexTilesStock = $('.stock').masonry({
        itemSelector: '.stock__item',
        columnWidth: ".grid-sizer",
        // gutter: '.gutter-sizer',
        percentPosition: true
    });
    if (indexTilesStock[0]) {
        indexTilesStock.imagesLoaded().progress(function() {
            masonryReloadItems(indexTilesStock);
        });
    }
}

$('.tabs__nav').find('a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        className = 'active',
        block = $(_this.attr('data-block')),
        time = 300;

    if(!parent.hasClass(className)){
        parent.addClass(className);
    }
    parent.siblings().removeClass(className).each(function () {
        var __this = $(this),
            link = __this.find('a'),
            block = $(link.attr('data-block'));
        if(block[0]){
            block.fadeOut(time)
        }
    });

    block.delay(time).fadeIn(time, function () {
        var object = block.find('.object');
        if(object[0]){
            masonryReloadItems(object);
        }
    });
});

function initYmaps() {
    var coords = [52.32594308927015, 104.2421168088913];
    var MapPlaces = new ymaps.Map('yamap', {
        center: coords,
        zoom: 12,
        controls: ['zoomControl']
    });
    MapPlaces.behaviors.disable('scrollZoom');

    collection = new ymaps.GeoObjectCollection(null,{
        iconLayout: 'default#image',
        iconImageHref: 'placemark.png',
        iconImageSize: [316, 143],
        // iconImageOffset: [31, -83]
    });

    MapPlaces.geoObjects.add(collection);

    placemark = new ymaps.Placemark(coords);
    collection.add(placemark);
}

try{
    ymaps.ready(initYmaps);
}catch (e){}


$('.order__item-toggle').click(function(e){
    e.preventDefault();
    var _this = $(this),
        item = _this.closest('.order__item');
        content = item.find('.order__item-content');

    _this.toggleClass('active');
    content.slideToggle(300);
});

$('.modal-open').modal('show');


var _fnNoUiSlider, catalogPriceInput, catalogPriceInputDo, catalogPriceInputOt, range;
catalogPriceInput = $('.catalog__filter-range');
range = catalogPriceInput.find('#range');
catalogPriceInputOt = catalogPriceInput.find('.ot');
catalogPriceInputDo = catalogPriceInput.find('.do');

if (typeof noUiSlider !== "undefined" && noUiSlider !== null) {
    noUiSlider.create(range[0], {
        start: [2270, 7315],
        connect: true,
        range: {
            'min': 0,
            'max': 10000
        },
        format: {
            'to': (function(value) {
                return value !== void 0 && value.toFixed(0);
            }),
            'from': Number
        }
    });
    _fnNoUiSlider = function(values, handle, val3, val4, val5) {
        var el;
        [catalogPriceInputOt, catalogPriceInputDo].forEach(function(item) {
            var index;
            index = item.parent().index();
            return item.change(function() {
                var array, val;
                array = [];
                val = $(this).val();
                if (index === 0) {
                    array = [val, null];
                } else {
                    array = [null, val];
                }
                return range[0].noUiSlider.set(array);
            });
        });
        if (handle) {
            el = catalogPriceInputDo;
        } else {
            el = catalogPriceInputOt;
        }
        el.text(values[handle]);
        // console.log();
        //
        // return el.css('left', val5[handle] + "%");
        return el.css({
            left: val5[handle] + "%",
            marginLeft: "-"+(el[0].offsetWidth/2)+"px"
        });
    };
    range[0].noUiSlider.on('update', _fnNoUiSlider);
}

$('.catalog-toggle-btn').click(function(e){
   e.preventDefault();
    $(this).toggleClass('active');
    $('.catalog-toggle-content').stop().slideToggle(300);

});

var blockVideo = $('.index__blockVideo-video video');
// only Firefox and Opera support Ogg ... oh yeah Chrome does too.


blockVideo.bind('timeupdate', function(e){
    var timePercent = (this.currentTime / this.duration)*100;
    $('.index__blockVideo-progress span').css('width', timePercent+'%')
});

if($.fn.popover){
    $('[data-toggle="popover"]').popover({
        trigger: 'click',
        container: 'body',
        html: true
    });
}


$(document).on('click', function (e) {
   var _this = $(e.target),
       popover = $('.popover');

    if((!_this.is('[data-toggle="popover"]') && !_this.closest('[data-toggle="popover"]')[0]) && popover[0] && popover.is(':visible')){
        if(!_this.closest('.popover')[0] && !_this.is('.popover')){
            $('[aria-describedby="'+popover.filter(':visible').attr('id')+'"]').click();
        }
    }
});

//
// function progressHandler(e){
//     console.log(e);
//     if(e.total && e.loaded){
//         // percentage of video loaded
//         var proportion = Math.round( e.loaded / e.total );
//         return proportion * 100;
//     } else {
//         // do nothing because we're autobuffering.
//     }
// }
// blockVideo[0].addEventListener('progress',progressHandler,false);



