/****** page-mainContent-subTextBox ******/
$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
  $(e.target).next('p').slideToggle().parent().siblings().find('p').slideUp();
});

/****** section - page-main-productContainer ******/

const mq = matchMedia('(max-width: 430px)');
if (mq.matches) {
  var mySwiper = new Swiper('.page-sidebarImages-container', {
    pagination: '.pagination',
    loop: true,
    autoplay: 1000,
    paginationClickable: true
  })
  $('.page-sidebarImages-container').on('mouseenter', function (e) {
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
  })
  $('.page-sidebarImages-container').on('mouseleave', function (e) {
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })
} else {
  clearInterval();
}
