
$(function slide(){
    $('.list-lookbook1-wrapper:first-child').appendTo('.list-lookbook-wrapper');
    setTimeout(slide,3500);
  });
  
  $(document).on('click','.img2_black', ()=>{
    $(`.img2`).css('background', `url('./assets/images/productlist/list-img2-black.jpg') 50%/cover`);
  });
  $(document).on('click','.img2_gray', ()=>{
    $(`.img2`).css('background', `url('./assets/images/productlist/list-img2-gray.jpg') 50%/cover`);
  });
  $(document).on('click','.img2_brown',()=>{
    $(`.img2`).css('background', `url('./assets/images/productlist/list-img2-brown.jpg') 50%/cover`);
  });
  $(document).on('click','.img3_black',()=>{
    $(`.img3`).css('background', `url('./assets/images/productlist/list-img3-black.jpg') 50%/cover`);
  });
  $(document).on('click','.img3_blue',()=>{
    $(`.img3`).css('background', `url('./assets/images/productlist/list-img3-blue.jpg') 50%/cover`);
  });
  $(document).on('click','.img3_white',()=>{
    $(`.img3`).css('background', `url('./assets/images/productlist/list-img3-white.jpg') 50%/cover`);
  });
  $(document).on('click','.img6_blue',()=>{
    $(`.img6`).css('background', `url('./assets/images/productlist/list-img6-blue.jpg') 50%/cover`);
  });
  $(document).on('click','.img6_brown',()=>{
    $(`.img6`).css('background', `url('./assets/images/productlist/list-img6-brown.jpg') 50%/cover`);
  });