import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'NG7Swiper';


  // config: any = {
  //   autoplay: 3000, // Autoplay option having value in milliseconds
  //   initialSlide: 3, // Slide Index Starting from 0
  //   slidesPerView: 3, // Slides Visible in Single View Default is 1
  //   pagination: '.swiper-pagination', // Pagination Class defined
  //   paginationClickable: true, // Making pagination dots clicable
  //   nextButton: '.swiper-button-next', // Class for next button
  //   prevButton: '.swiper-button-prev', // Class for prev button
  //   spaceBetween: 30 // Space between each Item
  // };
  config: SwiperConfigInterface = {
   
    direction: 'horizontal',
    initialSlide:1,
    slidesPerView: 9,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    breakpoints:{
      1024: {
        slidesPerView: 9,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 9,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
        initialSlide:1,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        initialSlide:1,
      }
    }
  }
  // public config: SwiperConfigInterface = {
  //   a11y: true,
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   keyboard: true,
  //   mousewheel: true,
  //   scrollbar: false,
  //   navigation: true,
  //   pagination: false
  // };
}
