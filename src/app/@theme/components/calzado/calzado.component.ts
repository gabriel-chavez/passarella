import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { Calzado, Color } from 'src/app/services/calzados.service';

declare var Swiper: any;
@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css']
})
export class CalzadoComponent implements AfterViewInit, OnInit {
  @Input() calzado: Calzado;
  @Input() index: number;


  private unico: number = Math.floor(Math.random() * 10000) + 1
  public tamanios: number[];
  public nextEl: string = 'swiper-button-next' + this.unico;
  public prevEl: string = 'swiper-button-prev' + this.unico;
  constructor() { }

  galleryThumbsConfig = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };
  galleryTopConfig = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.' + this.nextEl,
      prevEl: '.' + this.prevEl,
    },
    thumbs: {
      swiper: undefined
    }
  };
  @ViewChild('galleryThumbs', { static: false }) galleryThumbs?: SwiperDirective;
  @ViewChild('galleryImages', { static: false }) galleryImages?: SwiperDirective;
  ngOnInit() {
    console.log("=>", this.calzado.Colores)
    if (this.calzado.Colores)
    {  
      var tamaniosAux: string = this.calzado.Colores[0].Tamanios.toString();
      this.tamanios = tamaniosAux.substring(1, tamaniosAux.length - 1).split(",").map(Number);
    }      
    


  }
  ngAfterViewInit() {

    const imagesSwiper = this.galleryImages.swiper();
    const thumbsSwiper = this.galleryThumbs.swiper();
    imagesSwiper.thumbs.swiper = thumbsSwiper;
    imagesSwiper.thumbs.init();
    imagesSwiper.thumbs.update();
  }
  public onIndexChange(index: number): void {
 

      var tamaniosAux: string = this.calzado.Colores[index].Tamanios.toString();
      this.tamanios = tamaniosAux.substring(1, tamaniosAux.length - 1).split(",").map(Number);
    console.log('Swiper index: ', index);
  }
}
