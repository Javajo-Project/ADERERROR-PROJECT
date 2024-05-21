/****** page-mainContent-subTextBox ******/
$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
  $(e.target).next('p').slideToggle().parent().siblings().find('p').slideUp();
});

/****** section - page-main-productContainer ******/
let currentIdx = 0;
let mainSlide = 0;
const mq = matchMedia('(max-width: 430px)');
if (mq.matches) {
  $('.mo-button ul li').on('click', (e) => {
    const idx = $(e.target).index();
    $('.page-sidebarImages-wrapper li').first().appendTo('.page-sidebarImages-wrapper');
    $('.mo-button ul li').removeClass('active');
    $(e.target).addClass('active');
    
    currentIdx = idx;
    
  });
  const autoSlide = () => {
    $('.page-sidebarImages-wrapper li').first().appendTo('.page-sidebarImages-wrapper');
    // setInterval(imgChange, 3000);
    currentIdx = (currentIdx + 1) % $('.page-sidebarImages-wrapper li').length;
    $('.mo-button ul li').eq(currentIdx).addClass('active').siblings().removeClass('active');
  }
  let mainSlide = setInterval(autoSlide, 5000);

  $('.page-sidebarImages-wrapper').on({
    mouseenter: () => { clearInterval(mainSlide) },
    mouseleave: () => { mainSlide = setInterval(autoSlide, 5000) },
  })
} else {
  clearInterval(mainSlide);
}
