import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowData, ShowEntry } from '../../../shared/models/shows';

@Injectable({
  providedIn: 'root',
})
export class MazetvService {
  private apiUrl = environment.tvmazeApiUrl;
  private endpoints = environment.tvmazeApiEndpoints;

  constructor(private http: HttpClient) {}

  getShows(): Observable<ShowData[]> {
    return this.http.get<any>(`${this.apiUrl}${this.endpoints.getShows}`);
  }

  searchShows(showName: string): Observable<ShowEntry[]> {
    return this.http.get<any>(
      `${this.apiUrl}${this.endpoints.searchShows}${showName}`
    );
  }
}
