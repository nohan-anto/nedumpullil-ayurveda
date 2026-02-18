import { Injectable } from '@angular/core';
import GLightbox from 'glightbox';

@Injectable({
  providedIn: 'root',
})
export class GlightboxService {
  init(selector: string = '.glightbox') {
    return GLightbox({
      selector: selector
    });
  }
}
