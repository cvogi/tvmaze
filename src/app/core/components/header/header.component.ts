import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonSearchbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { MazetvService } from '../../services/mazetv/mazetv.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [TranslateModule, IonSearchbar, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent implements OnInit {
  constructor(
    private mazetvService: MazetvService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {}

  onSearchChange(event: any) {
    if (event.detail.value !== '') {
      this.mazetvService.searchShows(event.detail.value).subscribe((res) => {
        this.sharedDataService.setSearchResults(res.map((item) => item.show));
        this.router.navigate(['/search-results']);
      });
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  onClear() {
    this.router.navigate(['/dashboard']);
  }
}
