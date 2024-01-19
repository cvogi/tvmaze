import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../core/services/shared-data/shared-data.service';
import { ShowData } from '../../shared/models/shows';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
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
export class SheetComponent implements OnInit {
  showData: ShowData | null = null;
  subscription: Subscription;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {
    this.subscription = this.sharedDataService.setSheetData$.subscribe(
      (res) => {
        this.showData = res;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }
}
