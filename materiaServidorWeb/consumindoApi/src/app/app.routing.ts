import { ProdutoComponent } from './views/produto/produto.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { Routes } from "@angular/router";



export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'categoria', component: CategoriaComponent },

  { path: 'produto', component: ProdutoComponent },

  // Handle all other routes
  { path: '**', component: PageNotFoundComponent }
];
