import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShowData } from '../../../shared/models/shows';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private searchResultsSubject = new BehaviorSubject<ShowData[] | []>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  private setSheetDataSubject = new BehaviorSubject<ShowData | null>(null);
  setSheetData$ = this.setSheetDataSubject.asObservable();

  constructor() {}

  setSearchResults(res: ShowData[]) {
    this.searchResultsSubject.next(res);
  }

  setSheetData(res: ShowData) {
    this.setSheetDataSubject.next(res);
  }
}
