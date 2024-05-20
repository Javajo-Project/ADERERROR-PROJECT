

$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
    $(e.target).next('p').slideToggle()
  });

