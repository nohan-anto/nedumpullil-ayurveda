import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileNavActive = false;

  toggleMobileNav() {
    this.mobileNavActive = !this.mobileNavActive;
    if (this.mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }

  closeMobileNav() {
    if (this.mobileNavActive) {
      this.mobileNavActive = false;
      document.body.classList.remove('mobile-nav-active');
    }
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    target.parentElement?.classList.toggle('active');
    target.parentElement?.nextElementSibling?.classList.toggle('dropdown-active');
    event.stopPropagation();
  }
}
