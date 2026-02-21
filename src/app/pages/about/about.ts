import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlightboxService } from '../../services/glightbox';
import { ConsultationModal } from '../../components/consultation-modal/consultation-modal';

@Component({
  selector: 'app-about',
  imports: [RouterLink, ConsultationModal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  showConsultationModal = false;

  constructor(private glightboxService: GlightboxService) {}

  ngAfterViewInit() {
    // Initialize GLightbox for videos
    this.glightboxService.init();
  }

  openConsultationModal() {
    this.showConsultationModal = true;
  }

  closeConsultationModal() {
    this.showConsultationModal = false;
  }
}
