import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-form.html',
  styleUrl: './appointment-form.css',
})
export class AppointmentForm {
  selectedDate: string = '';
  countryCode: string = '+91';
  phoneNumber: string = '';
  patientName: string = '';
  submitted: boolean = false;

  countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'UAE' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
  ];

  getTomorrowDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  bookAppointment() {
    this.submitted = true;

    if (!this.selectedDate || !this.phoneNumber || !this.patientName) {
      return;
    }

    const emailTo = 'doctor@gmail.com';
    const subject = encodeURIComponent('Appointment Booking Request');
    const body = encodeURIComponent(
      `Dear Doctor,\n\n` +
      `I would like to book an appointment at Nedumpullil Ayurveda.\n\n` +
      `Patient Name: ${this.patientName}\n` +
      `Preferred Date: ${new Date(this.selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}\n` +
      `Contact Number: ${this.countryCode} ${this.phoneNumber}\n\n` +
      `Please confirm the appointment or suggest an alternative time.\n\n` +
      `Thank you,\n${this.patientName}`
    );

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Clear form data
    this.patientName = '';
    this.selectedDate = '';
    this.phoneNumber = '';
    this.countryCode = '+91';
    this.submitted = false;
  }
}
