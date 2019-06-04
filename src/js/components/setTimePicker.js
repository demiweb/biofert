import flatpickr from 'flatpickr';

export default function setTimepicker() {
  const $inputs = $('.js-time-input');
  if (!$inputs.length) return;

  $inputs.each((i, input) => {
    const type = input.getAttribute('data-type');
       

    const options = {
      time: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        disableMobile: 'true'
      }
    };

    const picker = flatpickr(input, options[type]);
  });

}
