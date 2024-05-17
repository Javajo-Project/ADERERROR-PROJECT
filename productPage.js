// const Swiper = new Swiper(".mo-img", {
//   speed: 600,
//   loop:true,
//   parallax: true, 
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: "swiper-pagination",
//     type: "fraction",
//   }
// });


$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
    $(e.target).next('p').slideToggle()
  });

