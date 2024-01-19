import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ShowData } from '../../models/shows';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../../core/services/shared-data/shared-data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonChip,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShowCardComponent {
  @Input() showData!: ShowData;

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  goToSheet(showData: ShowData) {
    this.sharedDataService.setSheetData(showData);
    this.router.navigate(['/sheet']);
  }
}
