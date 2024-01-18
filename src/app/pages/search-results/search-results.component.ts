import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Show } from '../../shared/models/shows';
import { IonContent, IonInfiniteScroll } from '@ionic/angular/standalone';
import { ShowCardComponent } from '../../shared/components/show-card/show-card.component';
import { SharedDataService } from '../../core/services/shared-data/shared-data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, IonInfiniteScroll, ShowCardComponent, IonContent],
})
export class SearchResultsComponent implements OnInit {
  //@ViewChild('scrollContainer') scrollContainer!: ElementRef;
  //@ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('scrollContainer', { read: ElementRef })
  public scrollContainer!: ElementRef<any>;

  shows: Show[] | [] = [];
  private subscription: Subscription;
  private scrollInterval: any;

  constructor(private sharedDataService: SharedDataService) {
    this.subscription = this.sharedDataService.searchResults$.subscribe(
      (results) => {
        this.shows = results;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startScrollingLeft() {
    this.stopScrolling(); // Detiene cualquier desplazamiento anterior
    this.scrollInterval = setInterval(() => {
      this.scrollContainer.nativeElement.scrollLeft -= 10; // Ajusta el valor según la velocidad deseada
    }, 10); // Ajusta el intervalo para controlar la velocidad de desplazamiento
  }

  startScrollingRight() {
    this.stopScrolling(); // Detiene cualquier desplazamiento anterior
    this.scrollInterval = setInterval(() => {
      this.scrollContainer.nativeElement.scrollLeft += 10; // Ajusta el valor según la velocidad deseada
    }, 10); // Ajusta el intervalo para controlar la velocidad de desplazamiento
  }

  stopScrolling() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
