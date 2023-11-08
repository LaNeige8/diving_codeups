
jQuery(function ($) {
  
  

});
const logo = document.querySelector('.header_inner');
const ham = document.querySelector('#js-headerBtn'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  logo.classList.toggle('active'); 
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し

});
//$(function(){
//  $('.header_btn_sp').on('click', function() {
//    $(this).toggleClass('active');
//    return false;
//  });
//});




const swiper = new Swiper('.swiper_kv', {
  // Optional parameters
  loop: true,
  speed: 1500, // 少しゆっくり(デフォルトは300)
  autoplay: { // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
});

const swiper = new Swiper('.swiper_campaign', {
  // Optional parameters
  slidesPerView: 1.15,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3.5
    }
  },
  loop: true,
  
  speed: 1500, // 少しゆっくり(デフォルトは300)
  autoplay: { // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    paginationClickable: true,
  },

});

