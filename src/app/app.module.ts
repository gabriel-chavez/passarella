import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './@theme/theme.module';
import { PaginasComponent } from './paginas/paginas.component';
import { PaginasModule } from './paginas/paginas.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './@core/interceptor/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
 
  
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    PaginasModule,
    ThemeModule,
    SwiperModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,    
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
