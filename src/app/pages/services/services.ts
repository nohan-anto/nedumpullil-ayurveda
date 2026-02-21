import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  WELLNESS_PACKAGES,
  TREATMENT_AREAS,
  THERAPIES,
  SPECIALIZED_TREATMENTS,
  WellnessPackage,
  TreatmentArea,
  Therapy,
  SpecializedTreatment
} from '../../constants/services.constants';
import { ConsultationModal } from '../../components/consultation-modal/consultation-modal';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink, ConsultationModal],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  activeTab: 'packages' | 'therapies' | 'specialized' = 'packages';
  activePackageTab: 'wellness' | 'treatment' = 'wellness';
  expandedPackage: number | null = 1; // First package open by default
  expandedSpecialty: number | null = 1; // First specialty open by default
  showConsultationModal = false;
  preSelectedWellness: number | null = null;
  preSelectedTreatment: number | null = null;
  preSelectedTherapy: number | null = null;
  preSelectedSpecialized: number | null = null;

  wellnessPackages: WellnessPackage[] = WELLNESS_PACKAGES;
  treatmentAreas: TreatmentArea[] = TREATMENT_AREAS;
  therapies: Therapy[] = THERAPIES;
  specializedTreatments: SpecializedTreatment[] = SPECIALIZED_TREATMENTS;

  switchTab(tab: 'packages' | 'therapies' | 'specialized') {
    this.activeTab = tab;
  }

  switchPackageTab(tab: 'wellness' | 'treatment') {
    this.activePackageTab = tab;
  }

  togglePackage(id: number) {
    this.expandedPackage = this.expandedPackage === id ? null : id;
  }

  toggleSpecialty(id: number) {
    this.expandedSpecialty = this.expandedSpecialty === id ? null : id;
  }

  openBookingModal(id: number, type: string) {
    // Reset all pre-selections
    this.preSelectedWellness = null;
    this.preSelectedTreatment = null;
    this.preSelectedTherapy = null;
    this.preSelectedSpecialized = null;

    // Set the appropriate pre-selection based on type
    if (type === 'wellness') {
      this.preSelectedWellness = id;
    } else if (type === 'treatment') {
      this.preSelectedTreatment = id;
    } else if (type === 'therapy') {
      this.preSelectedTherapy = id;
    } else if (type === 'specialized') {
      this.preSelectedSpecialized = id;
    }

    // Open modal
    this.showConsultationModal = true;
  }

  closeConsultationModal() {
    this.showConsultationModal = false;
    // Reset pre-selections when modal closes
    this.preSelectedWellness = null;
    this.preSelectedTreatment = null;
    this.preSelectedTherapy = null;
    this.preSelectedSpecialized = null;
  }
}
