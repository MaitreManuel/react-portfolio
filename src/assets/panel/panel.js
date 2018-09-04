import domready from 'domready';

domready(() => {
  init_focus_events_panel();
});

const init_focus_events_panel = () => {
  const panel = document.querySelector('#panel'),
    panel_toggle = document.querySelector('.toggle-panel');
  let focus = false;

  if (panel && panel_toggle) {
    panel.addEventListener('mouseover', () => {
      focus = 'progress';
      setTimeout(() => {
        panel_toggle.classList.add('z-idx');
        focus = true;
      }, 275);
    });
    panel.addEventListener('mouseleave', () => {
      if (focus === 'progress') {
        setTimeout(() => {
          panel_toggle.classList.remove('z-idx');
          focus = false;
        }, 275);
      } else {
        panel_toggle.classList.remove('z-idx');
        focus = false;
      }
    });
  }
};
