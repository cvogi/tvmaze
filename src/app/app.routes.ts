import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SheetComponent } from './pages/sheet/sheet.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'sheet', component: SheetComponent },
];
