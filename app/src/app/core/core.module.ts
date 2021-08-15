import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchBarComponent } from './components/header/header-search-bar/header-search-bar.component';
import { HeaderProfileComponent } from './components/header/header-profile/header-profile.component';
import { HeaderSearchParamsComponent } from './components/header/header-search-params/header-search-params.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchBarComponent,
    HeaderProfileComponent,
    HeaderSearchParamsComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
