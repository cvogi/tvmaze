import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ShowsSlideComponent } from '../shared/components/shows-slide/shows-slide.component';
import { ShowData } from '../shared/models/shows';
import { MazetvService } from '../core/services/mazetv/mazetv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ShowsSlideComponent],
})
export class DashboardComponent {
  showData: ShowData[] = [];
  uniqueGenres: string[] = [];
  showsByGenre: { [genre: string]: { showList: ShowData[] } } = {};
  showwFiltered = false;

  constructor(
    private translateService: TranslateService,
    private mazetvService: MazetvService
  ) {
    this.mazetvService.getShows().subscribe((res: ShowData[] | []) => {
      this.showData = res;
      this.groupShowsByGenre();
      this.showwFiltered = true;
    });
  }

  groupShowsByGenre(): void {
    this.showData.forEach((show) => {
      show.genres.forEach((genre) => {
        if (!this.showsByGenre[genre]) {
          this.showsByGenre[genre] = { showList: [] };
          this.uniqueGenres.push(genre);
        }
        this.showsByGenre[genre].showList.push(show);
      });
    });
  }
}
