import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  constructor(private toastService: ToastService) {}

  submitContactForm() {
    this.submitted = true;

    // Require name, subject, and message
    if (!this.name || !this.subject || !this.message) {
      return;
    }

    const emailTo = 'doctor@gmail.com';
    const emailSubject = encodeURIComponent(this.subject);

    const phoneText = this.phone ? `Phone: ${this.phone}\n` : '';

    const body = encodeURIComponent(
      `Name: ${this.name}\n` +
      phoneText +
      `\nMessage:\n${this.message}`
    );

    // Show toast notification
    this.toastService.info('Opening your mail app...', 2500);

    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${body}`;

    // Clear form
    this.name = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
    this.submitted = false;
  }
}
