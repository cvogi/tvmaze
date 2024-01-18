import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ShowsSlideComponent } from '../shared/components/shows-slide/shows-slide/shows-slide.component';
import { Show, ShowData } from '../shared/models/shows';
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
  uniqueGenres: string[] = [];
  showsByGenre: { [genre: string]: Show[] } = {};

  constructor(
    private translateService: TranslateService,
    private mazetvService: MazetvService
  ) {
    this.mazetvService.getShows().subscribe((res: Show[] | []) => {
      this.shows = res;
      this.getGenres();
      this.getShowsByGenre();
    });
  }

  /**
   * MazeTv api dont has filters by genre so we filter it manually
   */
  getGenres() {
    this.shows.forEach((show) => {
      show.genres?.forEach((genre) => {
        if (!this.uniqueGenres.includes(genre)) {
          this.uniqueGenres.push(genre);
        }
      });
    });
  }

  getShowsByGenre() {
    this.uniqueGenres.forEach((genre) => {
      this.showsByGenre[genre] = this.shows.filter((show) =>
        show.genres?.includes(genre)
      );
    });
  }
}
