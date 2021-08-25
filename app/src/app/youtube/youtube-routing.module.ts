import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
