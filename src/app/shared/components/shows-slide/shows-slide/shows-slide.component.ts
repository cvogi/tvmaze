import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../../../core/services/shared-data/shared-data.service';
import { Show } from '../../../models/shows';
import { ShowCardComponent } from '../../show-card/show-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shows-slide',
  templateUrl: './shows-slide.component.html',
  styleUrls: ['./shows-slide.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    IonInfiniteScroll,
    ShowCardComponent,
    IonContent,
  ],
})
export class ShowsSlideComponent {
  @ViewChild('scrollContainer', { read: ElementRef })
  scrollContainer!: ElementRef<any>;
  shows: Show[] | [] = [];
  subscription: Subscription;
  scrollInterval: any;

  searchResults$ = this.sharedDataService.searchResults$;

  constructor(private sharedDataService: SharedDataService) {
    this.subscription = this.sharedDataService.searchResults$.subscribe(
      (results) => {
        this.shows = results;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startScrollingLeft() {
    this.stopScrolling();
    this.scrollInterval = setInterval(() => {
      this.scrollContainer.nativeElement.scrollLeft -= 10;
    }, 10);
  }

  startScrollingRight() {
    this.stopScrolling();
    this.scrollInterval = setInterval(() => {
      this.scrollContainer.nativeElement.scrollLeft += 10;
    }, 10);
  }

  stopScrolling() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
