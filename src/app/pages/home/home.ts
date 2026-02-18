import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlightboxService } from '../../services/glightbox';
import { SwiperService } from '../../services/swiper';

interface BlogPost {
  image: string;
  date: string;
  title: string;
  author: string;
  category: string;
  delay: number;
}

interface Testimonial {
  image: string;
  quote: string;
  name: string;
}

interface HeroSlide {
  image: string;
  title: string;
  description: string;
}

interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface ServiceSlide {
  category: string;
  title: string;
  image: string;
}

interface ServiceCarousel {
  id: string;
  sectionTitle: string;
  sectionDescription: string;
  slides: ServiceSlide[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  private carouselInterval: any;
  currentSlide = 0;
  currentServiceCarousel = 0;

  heroSlides: HeroSlide[] = [
    {
      image: 'assets/img/hero_1.jpg',
      title: 'Holistic Healing Through Ancient Ayurvedic Wisdom',
      description: 'Experience authentic traditional treatments that restore balance and promote natural wellness for mind, body, and spirit'
    },
    {
      image: 'assets/img/hero_2.jpg',
      title: 'Personalized Ayurvedic Care For Your Well-being',
      description: 'Our expert practitioners create customized treatment plans based on your unique constitution and health needs'
    },
    {
      image: 'assets/img/hero_3.jpg',
      title: 'Traditional Panchakarma Detoxification',
      description: 'Cleanse and rejuvenate your body with our authentic five-step purification therapy rooted in centuries of practice'
    },
    {
      image: 'assets/img/hero_4.jpg',
      title: 'Natural Herbal Remedies & Medicines',
      description: 'Pure Ayurvedic formulations prepared from time-tested herbs to treat various ailments naturally and effectively'
    },
    {
      image: 'assets/img/hero_5.jpg',
      title: 'Journey to Complete Wellness',
      description: 'Discover the path to optimal health through therapeutic massages, yoga, meditation, and dietary guidance'
    }
  ];

  get totalSlides(): number {
    return this.heroSlides.length;
  }

  serviceCarousels: ServiceCarousel[] = [
    {
      id: 'ayurvedic-treatments',
      sectionTitle: 'Ayurvedic Treatments',
      sectionDescription: 'Discover our authentic traditional therapies',
      slides: [
        {
          category: 'Therapy',
          title: 'Panchakarma Detox',
          image: 'assets/img/img_sq_1.jpg'
        },
        {
          category: 'Massage',
          title: 'Abhyanga Oil Therapy',
          image: 'assets/img/img_sq_3.jpg'
        },
        {
          category: 'Treatment',
          title: 'Shirodhara Therapy',
          image: 'assets/img/img_sq_8.jpg'
        },
        {
          category: 'Wellness',
          title: 'Herbal Steam Bath',
          image: 'assets/img/img_sq_4.jpg'
        },
        {
          category: 'Therapy',
          title: 'Nasyam Treatment',
          image: 'assets/img/img_sq_5.jpg'
        },
        {
          category: 'Massage',
          title: 'Pizhichil Therapy',
          image: 'assets/img/img_sq_6.jpg'
        },
        {
          category: 'Treatment',
          title: 'Kizhi Massage',
          image: 'assets/img/img_sq_8.jpg'
        }
      ]
    },
    {
      id: 'wellness-programs',
      sectionTitle: 'Wellness Programs',
      sectionDescription: 'Comprehensive health packages for your well-being',
      slides: [
        {
          category: 'Program',
          title: 'Stress Relief Package',
          image: 'assets/img/img_sq_1.jpg'
        },
        {
          category: 'Program',
          title: 'Weight Management',
          image: 'assets/img/img_sq_3.jpg'
        },
        {
          category: 'Program',
          title: 'Immunity Boost',
          image: 'assets/img/img_sq_4.jpg'
        }
      ]
    }
  ];

  services: Service[] = [
    {
      number: '01',
      icon: 'bi-heart-pulse',
      title: 'Panchakarma Therapy',
      description: 'Traditional detoxification and rejuvenation treatment that cleanses the body of toxins and restores balance'
    },
    {
      number: '02',
      icon: 'bi-droplet',
      title: 'Abhyanga Massage',
      description: 'Therapeutic full-body oil massage using warm herbal oils to promote relaxation and improve circulation'
    },
    {
      number: '03',
      icon: 'bi-capsule',
      title: 'Herbal Medicines',
      description: 'Authentic Ayurvedic formulations prepared from natural herbs to treat various health conditions'
    },
    {
      number: '04',
      icon: 'bi-person-check',
      title: 'Consultation & Diagnosis',
      description: 'Personalized health assessment and treatment plan based on your unique body constitution (Prakriti)'
    },
    {
      number: '05',
      icon: 'bi-flower1',
      title: 'Shirodhara Treatment',
      description: 'Calming therapy where warm oil is gently poured on the forehead to relieve stress and anxiety'
    },
    {
      number: '06',
      icon: 'bi-cup-hot',
      title: 'Dietary Counseling',
      description: 'Customized nutrition guidance according to Ayurvedic principles for optimal health and wellness'
    },
    {
      number: '07',
      icon: 'bi-yin-yang',
      title: 'Yoga & Meditation',
      description: 'Guided sessions to enhance physical flexibility, mental clarity, and spiritual well-being'
    },
    {
      number: '08',
      icon: 'bi-bandaid',
      title: 'Pain Management',
      description: 'Natural Ayurvedic treatments for chronic pain relief including arthritis, back pain, and joint disorders'
    }
  ];

  testimonials: Testimonial[] = [
    {
      image: 'assets/img/testimonials/testimonials-1.jpg',
      quote: 'The Panchakarma treatment at Nedumpullil Ayurveda was life-changing. After years of chronic pain, I finally found relief through their authentic traditional approach.',
      name: 'Rajesh Kumar'
    },
    {
      image: 'assets/img/testimonials/testimonials-2.jpg',
      quote: 'I was skeptical at first, but the personalized Ayurvedic treatment plan helped me overcome my digestive issues completely. The doctors are highly knowledgeable and caring.',
      name: 'Priya Menon'
    },
    {
      image: 'assets/img/testimonials/testimonials-3.jpg',
      quote: 'The herbal medicines and therapeutic massages have significantly improved my overall well-being. I highly recommend Nedumpullil Ayurveda for anyone seeking holistic healing.',
      name: 'Anita Nair'
    },
    {
      image: 'assets/img/testimonials/testimonials-4.jpg',
      quote: 'As someone dealing with stress and anxiety, the Ayurvedic treatments and yoga sessions here have been incredibly beneficial. I feel rejuvenated and balanced.',
      name: 'Suresh Chandran'
    }
  ];

  recentPosts: BlogPost[] = [
    {
      image: 'assets/img/blog/blog-1.jpg',
      date: 'December 12',
      title: 'Understanding Ayurvedic Principles for Modern Living',
      author: 'Dr. Sharma',
      category: 'Ayurveda Basics',
      delay: 100
    },
    {
      image: 'assets/img/blog/blog-2.jpg',
      date: 'July 17',
      title: 'Benefits of Traditional Panchakarma Therapy',
      author: 'Dr. Krishnan',
      category: 'Treatments',
      delay: 200
    },
    {
      image: 'assets/img/blog/blog-3.jpg',
      date: 'September 05',
      title: 'Seasonal Diet Changes According to Ayurveda',
      author: 'Dr. Menon',
      category: 'Nutrition',
      delay: 300
    }
  ];

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

  nextServiceCarousel() {
    this.currentServiceCarousel = (this.currentServiceCarousel + 1) % this.serviceCarousels.length;
    // Re-initialize Swiper for the new carousel
    setTimeout(() => {
      this.swiperService.initAll();
    }, 100);
  }

  prevServiceCarousel() {
    this.currentServiceCarousel = (this.currentServiceCarousel - 1 + this.serviceCarousels.length) % this.serviceCarousels.length;
    // Re-initialize Swiper for the new carousel
    setTimeout(() => {
      this.swiperService.initAll();
    }, 100);
  }
}
