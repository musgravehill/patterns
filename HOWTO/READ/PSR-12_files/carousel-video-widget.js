document.addEventListener('DOMContentLoaded', function () {

    // if (jQuery('.flex-bullet-slider-lazy').length) {
        // flexslider with lazy load
        jQuery('.flex-bullet-slider-lazy').flexslider({
            touch: true,
            directionNav: false,
            slideshowSpeed: 10000,
            initDelay: 0,
            animation: "fade",
            start: function (slider) { // Fires when the slider loads the first slide
                var slides = slider.slides,
                    index = slider.animatingTo,
                    $slide = jQuery(slides[index]);

                $slide.find('img[data-src]').each(function () {
                    var src = jQuery(this).attr('data-src');
                    jQuery(this).attr('src', src).removeAttr('data-src');
                    var srcset = jQuery(this).attr('data-srcset');
                    if (srcset) jQuery(this).attr('srcset', srcset).removeAttr('data-srcset');
                });
            },
            before: function (slider) {
                var slides = slider.slides,
                    index = slider.animatingTo,
                    $slide = jQuery(slides[index]);

                $slide.find('img[data-src]').each(function () {
                    var src = jQuery(this).attr('data-src');
                    jQuery(this).attr('src', src).removeAttr('data-src');
                    var srcset = jQuery(this).attr('data-srcset');
                    if (srcset) jQuery(this).attr('srcset', srcset).removeAttr('data-srcset');
                });
            }
        });
    // }
});
