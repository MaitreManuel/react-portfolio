import domready from 'domready';

domready(() => {
  init_events_panel();
});

const init_events_panel = () => {
  const col_panel = document.querySelector('.col-panel'),
    panel = document.querySelector('#panel'),
    panel_toggle = document.querySelector('.toggle-panel');
  let focus = false,
    open = true;

  if (col_panel && panel && panel_toggle) {
    panel.addEventListener('mouseover', () => {
      focus = 'progress';
      setTimeout(() => {
        panel_toggle.classList.add('z-idx');
        focus = true;
      }, 175);
    });
    panel.addEventListener('mouseleave', () => {
      if (focus === 'progress') {
        setTimeout(() => {
          panel_toggle.classList.remove('z-idx');
          focus = false;
        }, 175);
      } else {
        panel_toggle.classList.remove('z-idx');
        focus = false;
      }
    });
    panel_toggle.addEventListener('click', () => {
      /** check only if true not if exist, because :
       * open = false
       * if (open) { }
       * > output : true
      **/
      if (open === true) {
        panel_toggle.querySelector('.fa-angle-left').classList.add('d-none');
        panel_toggle.querySelector('.fa-angle-right').classList.remove('d-none');
        col_panel.classList.add('close');
        open = false;
      } else {
        panel_toggle.querySelector('.fa-angle-left').classList.remove('d-none');
        panel_toggle.querySelector('.fa-angle-right').classList.add('d-none');
        col_panel.classList.remove('close');
        open = true;
      }
    });
  }
};
