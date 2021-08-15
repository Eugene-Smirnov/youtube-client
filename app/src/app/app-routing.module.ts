import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
