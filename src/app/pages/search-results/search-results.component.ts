import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsSlideComponent } from '../../shared/components/shows-slide/shows-slide/shows-slide.component';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../core/services/shared-data/shared-data.service';
import { Show } from '../../shared/models/shows';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, ShowsSlideComponent],
})
export class SearchResultsComponent implements OnInit {
  shows: Show[] | [] = [];
  subscription: Subscription;
  searchResults$ = this.sharedDataService.searchResults$;

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
}
