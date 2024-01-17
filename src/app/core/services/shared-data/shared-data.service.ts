import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Show } from '../../../shared/models/shows';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private searchResultsSubject = new BehaviorSubject<Show[] | []>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor() {}

  setSearchResults(res: Show[]) {
    this.searchResultsSubject.next(res);
  }

  clearSearchResults() {
    this.searchResultsSubject.next([]);
  }
}
