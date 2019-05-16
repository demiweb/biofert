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
      }
    };

    $(slider).slick(options[name]);
  });
};
