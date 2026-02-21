import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  WELLNESS_PACKAGES,
  TREATMENT_AREAS,
  THERAPIES,
  SPECIALIZED_TREATMENTS
} from '../../constants/services.constants';

@Component({
  selector: 'app-consultation-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './consultation-modal.html',
  styleUrl: './consultation-modal.css',
})
export class ConsultationModal implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() preSelectedWellness: number | null = null;
  @Input() preSelectedTreatment: number | null = null;
  @Input() preSelectedTherapy: number | null = null;
  @Input() preSelectedSpecialized: number | null = null;

  name: string = '';
  email: string = '';
  phone: string = '';
  wellnessPackage: number | null = null;
  treatmentArea: number | null = null;
  therapy: number | null = null;
  specializedTreatment: number | null = null;
  submitted: boolean = false;

  wellnessPackages = WELLNESS_PACKAGES;
  treatmentAreas = TREATMENT_AREAS;
  therapies = THERAPIES;
  specializedTreatments = SPECIALIZED_TREATMENTS;

  get hasPreSelection(): boolean {
    return this.preSelectedWellness !== null ||
           this.preSelectedTreatment !== null ||
           this.preSelectedTherapy !== null ||
           this.preSelectedSpecialized !== null;
  }

  ngOnInit() {
    // Pre-fill form fields if values are provided
    if (this.preSelectedWellness !== null) {
      this.wellnessPackage = this.preSelectedWellness;
    }
    if (this.preSelectedTreatment !== null) {
      this.treatmentArea = this.preSelectedTreatment;
    }
    if (this.preSelectedTherapy !== null) {
      this.therapy = this.preSelectedTherapy;
    }
    if (this.preSelectedSpecialized !== null) {
      this.specializedTreatment = this.preSelectedSpecialized;
    }
  }

  closeModal() {
    this.close.emit();
  }

  submitConsultation() {
    this.submitted = true;

    // Require name, email, phone
    if (!this.name || !this.email || !this.phone) {
      return;
    }

    // If there's a pre-selection, require that specific field
    if (this.hasPreSelection) {
      if (this.preSelectedWellness !== null && this.wellnessPackage === null) return;
      if (this.preSelectedTreatment !== null && this.treatmentArea === null) return;
      if (this.preSelectedTherapy !== null && this.therapy === null) return;
      if (this.preSelectedSpecialized !== null && this.specializedTreatment === null) return;
    } else {
      // If no pre-selection, require at least one service selection
      if (!this.wellnessPackage && !this.treatmentArea && !this.therapy && !this.specializedTreatment) {
        return;
      }
    }

    const emailTo = 'doctor@gmail.com';
    const subject = encodeURIComponent('Consultation Booking Request');

    // Get selected service names by ID
    const wellnessPackageText = this.wellnessPackage !== null ?
      `Wellness Package: ${this.wellnessPackages.find(p => p.id === this.wellnessPackage)?.name}\n` : '';
    const treatmentAreaText = this.treatmentArea !== null ?
      `Treatment Area: ${this.treatmentAreas.find(t => t.id === this.treatmentArea)?.name}\n` : '';
    const therapyText = this.therapy !== null ?
      `Preferred Therapy: ${this.therapies.find(t => t.id === this.therapy)?.name}\n` : '';
    const specializedTreatmentText = this.specializedTreatment !== null ?
      `Specialized Treatment: ${this.specializedTreatments.find(s => s.id === this.specializedTreatment)?.name}\n` : '';

    const body = encodeURIComponent(
      `Dear Doctor,\n\n` +
      `I would like to book a consultation at Nedumpullil Ayurveda.\n\n` +
      `Name: ${this.name}\n` +
      `Email: ${this.email}\n` +
      `Phone: ${this.phone}\n\n` +
      `Services Interested In:\n` +
      wellnessPackageText +
      treatmentAreaText +
      therapyText +
      specializedTreatmentText +
      `\nPlease contact me to schedule a consultation.\n\n` +
      `Thank you,\n${this.name}`
    );

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Clear form
    this.name = '';
    this.email = '';
    this.phone = '';
    this.wellnessPackage = null;
    this.treatmentArea = null;
    this.therapy = null;
    this.specializedTreatment = null;
    this.submitted = false;

    // Close modal
    this.closeModal();
  }
}
