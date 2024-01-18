import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
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
  @Input() shows!: Show[] | [];
  @ViewChild('scrollContainer', { read: ElementRef })
  scrollContainer!: ElementRef<any>;
  scrollInterval: any;

  constructor() {}

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
