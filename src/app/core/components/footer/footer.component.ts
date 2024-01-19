import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
