import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ShowsSlideComponent } from '../shared/components/shows-slide/shows-slide/shows-slide.component';
import { Show } from '../shared/models/shows';
import { MazetvService } from '../core/services/mazetv/mazetv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ShowsSlideComponent],
})
export class DashboardComponent {
  shows: Show[] = [];
  uniqueGenres: Set<string> = new Set();
  showsByGenre: { [key: string]: Show[] } = {};

  constructor(
    private translateService: TranslateService,
    private mazetvService: MazetvService,
    private router: Router
  ) {
    this.mazetvService.getShows().subscribe((res: Show[] | []) => {
      this.shows = res;
      this.manageGenres();
    });
  }

  manageGenres() {
    this.shows.forEach((show) => {
      show.show.genres.forEach((genre) => {
        this.uniqueGenres.add(genre);
      });
    });
    this.uniqueGenres.forEach((genre) => {
      this.showsByGenre[genre] = this.shows.filter((show) =>
        show.show.genres.includes(genre)
      );
    });
  }
}
