/****** page-mainContent-subTextBox ******/
$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
  $(e.target).next('p').slideToggle().parent().siblings().find('p').slideUp();
  });


  const mq = matchMedia('(max-width: 430px)');
  const imgChange = () => $('.page-sidebarImages-wrapper li').first().appendTo('.page-sidebarImages-wrapper')
  if(mq.matches) {
  setInterval(imgChange, 3000);
} else {
  clearInterval(imgChange);
}

// const view = (bg, txt) => {
//   document.body.style.backgroundColor = bg;
//   document.body.innerHTML = `<h2>768${txt} 화면</h2>`;
// }

// const resizeEx = () => {
//   console.log('리사이즈 됨');
//   mq.matches ? view('orange', '이하') : view('lightblue', '이상');
// }

// addEventListener('resize', resizeEx);