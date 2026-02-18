import { Injectable } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {
  initAll() {
    document.querySelectorAll('.init-swiper').forEach((swiperElement: any) => {
      const configElement = swiperElement.querySelector('.swiper-config');
      if (configElement) {
        const config = JSON.parse(configElement.innerHTML.trim());
        new Swiper(swiperElement, config);
      }
    });
  }

  init(element: HTMLElement, config: any) {
    return new Swiper(element, config);
  }
}
