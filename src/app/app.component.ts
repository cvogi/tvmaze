import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { IonApp, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    RouterOutlet,
    IonApp,
    IonContent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mazetv';
}
