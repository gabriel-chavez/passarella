import { Component, OnInit } from '@angular/core';

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
  config: any = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    slidesPerColumn: 1,
    paginationClickable: true,
    spaceBetween: 35,
    breakpoints: {
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
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  }
}
