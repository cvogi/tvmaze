import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsSlideComponent } from '../../shared/components/shows-slide/shows-slide/shows-slide.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, ShowsSlideComponent],
})
export class SearchResultsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
