import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { SheetComponent } from './pages/sheet/sheet.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'main', component: MainComponent },
  { path: 'sheet', component: SheetComponent },
];
