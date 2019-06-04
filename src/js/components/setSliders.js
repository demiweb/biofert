import slick from 'slick-carousel';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const $dots = $wrap.find('.js-dots');

    const options = {
      banner: {
        dots: true,
        appendDots: $dots,
        prevArrow: $prev,
        nextArrow: $next,
        autoplay: true
      },
      about: {
        dots: true,
        appendDots: $dots,
        prevArrow: false,
        nextArrow: false,
        autoplay: true
      },
      partners: {
        slidesToShow: 4,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      'items_more': {
        slidesToShow: 3,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [          
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              appendDots: $dots,
              dots: true,
              slidesToShow: 1
            }
          },
        ]
      }
    };

    

    $(slider).slick(options[name]);
  });
};
