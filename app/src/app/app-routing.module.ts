import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailsPageComponent } from './youtube/pages/details-page/details-page.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
