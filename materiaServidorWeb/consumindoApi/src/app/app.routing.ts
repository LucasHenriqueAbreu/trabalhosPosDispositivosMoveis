import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { Routes } from "@angular/router";



export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  // Handle all other routes
  { path: '**', component: PageNotFoundComponent }
];
