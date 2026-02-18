import { Component, OnInit, afterNextRender, signal, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs/operators';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('nedumpullil-ayurveda');

  constructor(private router: Router) {
    afterNextRender(() => {
      // Initialize AOS
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }

      // Initial scroll check
      this.toggleScrolled();
    });
  }

  ngOnInit() {
    // Refresh AOS on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (typeof AOS !== 'undefined') {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
  }

  @HostListener('window:scroll')
  toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top'))) {
      if (selectBody) {
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      }
      return;
    }
    if (selectBody) {
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  }
}
