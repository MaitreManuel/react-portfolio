import domready from 'domready';

domready(() => {
  const panel = document.querySelector('#panel'),
    panel_toggle = document.querySelector('.toggle-panel');

  if (panel && panel_toggle) {
    panel.addEventListener('mouseover', () => {
      setTimeout(() => {
        panel_toggle.classList.add('z-idx');
      }, 275);
    });
    panel.addEventListener('mouseleave', () => {
      panel_toggle.classList.remove('z-idx');
    });
  }
});
