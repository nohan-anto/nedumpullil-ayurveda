import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlightboxService } from '../../services/glightbox';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  constructor(private glightboxService: GlightboxService) {}

  ngAfterViewInit() {
    // Initialize GLightbox for videos
    this.glightboxService.init();
  }
}
