import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mySwiper = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Navigation, Pagination],
    pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

(() => {
   if (window.screen.width < 768) {
    mySwiper.style.display = 'block';
  } else {
    mySwiper.style.display = 'none';
  };
  
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      mySwiper.style.display = 'block';
      return;
    }
    mySwiper.style.display = 'none';
  });
})();


