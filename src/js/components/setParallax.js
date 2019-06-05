import Rellax from 'rellax';

export default function setParallax() {
  var rellax = new Rellax('.js-parallax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
};
