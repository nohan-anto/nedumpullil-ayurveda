import { Component, HostListener, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../../constants/common.constants';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  phoneNumber = PHONE_NUMBER;
  emailAddress = EMAIL_ADDRESS;
  constructor() {
    afterNextRender(() => {
      this.toggleScrollTop();
    });
  }

  @HostListener('window:scroll')
  toggleScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
