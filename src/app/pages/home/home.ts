import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlightboxService } from '../../services/glightbox';
import { SwiperService } from '../../services/swiper';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  private carouselInterval: any;
  currentSlide = 0;
  private totalSlides = 5;

  constructor(
    private glightboxService: GlightboxService,
    private swiperService: SwiperService
  ) {}

  ngAfterViewInit() {
    // Auto-advance carousel every 5 seconds
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Initialize Swiper
    this.swiperService.initAll();

    // Initialize GLightbox
    this.glightboxService.init();
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    const items = document.querySelectorAll('#hero-carousel .carousel-item');
    if (items.length === 0) return;

    items[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    items[this.currentSlide].classList.add('active');
  }

  prevSlide() {
    const items = document.querySelectorAll('#hero-carousel .carousel-item');
    if (items.length === 0) return;

    items[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    items[this.currentSlide].classList.add('active');
  }

  goToSlide(index: number) {
    const items = document.querySelectorAll('#hero-carousel .carousel-item');
    if (items.length === 0) return;

    items[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    items[this.currentSlide].classList.add('active');
  }
}
