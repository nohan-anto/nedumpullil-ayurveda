import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlightboxService } from '../../services/glightbox';
import { SwiperService } from '../../services/swiper';
import { AppointmentForm } from '../../components/appointment-form/appointment-form';
import { ConsultationModal } from '../../components/consultation-modal/consultation-modal';

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
  description?: string;
}

interface ServiceCarousel {
  id: string;
  sectionTitle: string;
  sectionDescription: string;
  slides: ServiceSlide[];
}

interface Therapy {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, AppointmentForm, ConsultationModal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  private carouselInterval: any;
  private therapyInterval: any;
  currentSlide = 0;
  currentTherapy = 0;
  showConsultationModal = false;

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

  serviceCarousels: ServiceCarousel[] = [];

  therapies: Therapy[] = [
    {
      name: 'Abhyangam',
      subtitle: 'Therapeutic Full-Body Oil Massage',
      description: 'A therapeutic full-body oil massage that helps restore balance among the body\'s energies. It improves circulation, eases muscle stiffness, supports joint health, and promotes deep physical and mental relaxation.',
      image: 'assets/img/img_sq_1.jpg'
    },
    {
      name: 'Pizhichil',
      subtitle: 'Rejuvenating Oil Stream Therapy',
      description: 'A deeply rejuvenating therapy where warm medicated oil is continuously poured over the body. It nourishes the nervous system, strengthens muscles, and is especially beneficial for chronic joint and neurological conditions.',
      image: 'assets/img/img_sq_1.jpg'
    },
    {
      name: 'Shirodhara',
      subtitle: 'Calming Forehead Oil Stream',
      description: 'A calming treatment in which medicated oil is gently streamed over the forehead. It helps relieve stress, anxiety, insomnia, and mental fatigue while supporting emotional balance and clarity.',
      image: 'assets/img/img_sq_3.jpg'
    },
    {
      name: 'Kati Vasthi',
      subtitle: 'Lower Back Oil Retention',
      description: 'A localized therapy that retains warm medicated oil over the lower back. It is effective for chronic back pain, spinal discomfort, and conditions related to nerve compression.',
      image: 'assets/img/img_sq_4.jpg'
    },
    {
      name: 'Thalapothichi',
      subtitle: 'Cooling Scalp Herbal Paste',
      description: 'A cooling herbal paste is applied to the scalp to calm the nervous system. This treatment is helpful for headaches, migraines, stress-related disorders, and scalp or hair concerns.',
      image: 'assets/img/img_sq_5.jpg'
    },
    {
      name: 'Netra Tarpanam',
      subtitle: 'Nourishing Eye Therapy',
      description: 'A nourishing eye therapy using medicated ghee or herbal preparations. It relieves eye strain, dryness, and supports overall eye health and vision.',
      image: 'assets/img/img_sq_6.jpg'
    },
    {
      name: 'Elakizhi',
      subtitle: 'Herbal Leaf Bundle Massage',
      description: 'A revitalizing massage using warm herbal leaf bundles. It reduces inflammation, relieves muscle and joint pain, and improves mobility and circulation.',
      image: 'assets/img/img_sq_4.jpg'
    },
    {
      name: 'Njavarakizhi',
      subtitle: 'Medicated Rice Bolus Therapy',
      description: 'A strengthening therapy using medicated rice boluses cooked in herbal decoctions and milk. It supports muscle nourishment, improves strength, and promotes overall rejuvenation.',
      image: 'assets/img/img_sq_8.jpg'
    },
    {
      name: 'Thakradhara',
      subtitle: 'Cooling Buttermilk Stream',
      description: 'A cooling variation of Shirodhara using medicated buttermilk. It is especially beneficial for stress, skin disorders, scalp conditions, and excess body heat.',
      image: 'assets/img/img_sq_1.jpg'
    },
    {
      name: 'Shiro Vasthi',
      subtitle: 'Head Oil Retention Therapy',
      description: 'A specialized treatment where medicated oil is retained on the head. It helps nourish the brain and nervous system and is beneficial for neurological imbalances and chronic headaches.',
      image: 'assets/img/img_sq_3.jpg'
    },
    {
      name: 'Nasyam',
      subtitle: 'Nasal Detoxification',
      description: 'A detoxifying therapy involving medicated nasal drops. It cleanses the sinus passages, improves respiratory health, and strengthens the sense organs above the neck.',
      image: 'assets/img/img_sq_3.jpg'
    },
    {
      name: 'Udvarthanam',
      subtitle: 'Herbal Powder Massage',
      description: 'A stimulating dry herbal powder massage that helps reduce excess fat, improves metabolism, enhances circulation, and leaves the skin firm and refreshed.',
      image: 'assets/img/img_sq_4.jpg'
    },
    {
      name: 'Rasayana Chikitsa',
      subtitle: 'Rejuvenation Therapy',
      description: 'A rejuvenation-focused therapy designed to enhance immunity, vitality, and longevity while supporting the body\'s natural healing and anti-aging processes.',
      image: 'assets/img/img_sq_5.jpg'
    },
    {
      name: 'Virechanam',
      subtitle: 'Digestive Purification',
      description: 'A purification therapy that gently cleanses the digestive system, helping eliminate toxins and restore metabolic balance.',
      image: 'assets/img/img_sq_6.jpg'
    },
    {
      name: 'Vamanam',
      subtitle: 'Respiratory Detoxification',
      description: 'A detoxification procedure focused on eliminating excess Kapha from the body, supporting respiratory health and metabolic clarity.',
      image: 'assets/img/img_sq_8.jpg'
    }
  ];

  services: Service[] = [
    {
      number: '01',
      icon: 'bi-droplet-fill',
      title: 'Dermatology & Trichology',
      description: 'Specialized Ayurvedic treatments for skin disorders, hair loss, scalp conditions, and comprehensive dermatological care using natural herbal remedies'
    },
    {
      number: '02',
      icon: 'bi-shield-fill-exclamation',
      title: 'Frozen Shoulder',
      description: 'Therapeutic interventions combining massage, herbal applications, and movement therapy to restore mobility and reduce pain in shoulder joint conditions'
    },
    {
      number: '03',
      icon: 'bi-heart-pulse',
      title: 'Arthritis Management',
      description: 'Comprehensive treatment protocols for various forms of arthritis using traditional Panchakarma therapies, herbal medications, and lifestyle modifications'
    },
    {
      number: '04',
      icon: 'bi-person-hearts',
      title: 'Women Wellness',
      description: 'Holistic care addressing hormonal balance, menstrual disorders, PCOS, menopause management, and overall reproductive health for women at all life stages'
    },
    {
      number: '05',
      icon: 'bi-arrows-expand',
      title: 'Neck Stiffness',
      description: 'Targeted treatments for cervical spondylosis, muscle tension, and neck pain through specialized massages, Nasyam therapy, and therapeutic exercises'
    },
    {
      number: '06',
      icon: 'bi-lungs',
      title: 'Asthma & Respiratory Care',
      description: 'Ayurvedic management of asthma, chronic bronchitis, and respiratory ailments through herbal medicines, breathing exercises, and dietary modifications'
    },
    {
      number: '07',
      icon: 'bi-stars',
      title: 'Pediatric Care (Balraksha)',
      description: 'Specialized care for children focusing on holistic growth and development, immunity building, natural healing, improved digestion, and optimal nutrition'
    },
    {
      number: '08',
      icon: 'bi-bandaid',
      title: 'Knee Pain Management',
      description: 'Effective Ayurvedic treatments for osteoarthritis, ligament injuries, and chronic knee pain using Janu Basti, herbal oils, and strengthening protocols'
    },
    {
      number: '09',
      icon: 'bi-flower3',
      title: 'Stress & Strain Clinic',
      description: 'Comprehensive rehabilitation services for stress management, mental fatigue, and physical strain through relaxation therapies, meditation, and rejuvenation treatments'
    },
    {
      number: '10',
      icon: 'bi-shield-plus',
      title: 'Sports Injury Management',
      description: 'Specialized prevention and treatment protocols for sports-related injuries focusing on rapid recovery, pain relief, and performance enhancement'
    },
    {
      number: '11',
      icon: 'bi-gender-female',
      title: 'Gynecology & Postnatal Care',
      description: 'Traditional Ayurvedic gynecological treatments, prenatal support, postnatal recovery programs, and comprehensive maternal wellness care'
    },
    {
      number: '12',
      icon: 'bi-prescription2',
      title: 'Skin Disease Treatment',
      description: 'Evidence-based Ayurvedic approach to treating eczema, psoriasis, acne, pigmentation disorders, and other chronic skin conditions with natural remedies'
    }
  ];

  testimonials: Testimonial[] = [
    {
      image: '',
      quote: 'We came to Nedumpullil Ayurveda primarily for the natural beauty and peaceful environment. The resort is nestled in such serene surroundings that even without taking any treatments, our stay was incredibly rejuvenating. The staff was wonderful, the rooms were comfortable, and waking up to the sounds of nature was therapeutic in itself. A perfect retreat for anyone seeking tranquility.',
      name: 'Arjun & Meera Krishnan, Bangalore'
    },
    {
      image: '',
      quote: 'I underwent a 14-day Panchakarma treatment for my chronic arthritis, and the results have been remarkable. Dr. Basil\'s expertise in Marma therapy combined with traditional Ayurvedic treatments provided relief I had been seeking for years. The resort setting made the healing process even more effective - surrounded by nature, away from city stress. The food, prepared according to Ayurvedic principles, was both healing and delicious.',
      name: 'Lakshmi Menon, Kochi'
    },
    {
      image: '',
      quote: 'Our family stayed at the resort for a week-long vacation. While my parents opted for wellness treatments, my wife and I simply enjoyed the beautiful natural surroundings, took nature walks, and experienced the peaceful atmosphere. The flexibility to stay without mandatory treatments was perfect for us. The organic meals and yoga sessions were available to everyone. It is truly a place where healing and relaxation coexist beautifully.',
      name: 'Vikram Sharma & Family, Mumbai'
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
    // Auto-advance hero carousel every 5 seconds
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Auto-advance therapy carousel every 4 seconds
    this.therapyInterval = setInterval(() => {
      this.nextTherapy();
    }, 4000);

    // Initialize Swiper
    this.swiperService.initAll();

    // Initialize GLightbox
    this.glightboxService.init();
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.therapyInterval) {
      clearInterval(this.therapyInterval);
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

  get totalTherapies(): number {
    return this.therapies.length;
  }

  nextTherapy() {
    this.currentTherapy = (this.currentTherapy + 1) % this.totalTherapies;
  }

  prevTherapy() {
    this.currentTherapy = (this.currentTherapy - 1 + this.totalTherapies) % this.totalTherapies;
  }

  goToTherapy(index: number) {
    this.currentTherapy = index;
  }

  pauseTherapyAutoplay() {
    if (this.therapyInterval) {
      clearInterval(this.therapyInterval);
    }
  }

  resumeTherapyAutoplay() {
    this.therapyInterval = setInterval(() => {
      this.nextTherapy();
    }, 4000);
  }

  openConsultationModal() {
    this.showConsultationModal = true;
  }

  closeConsultationModal() {
    this.showConsultationModal = false;
  }
}
