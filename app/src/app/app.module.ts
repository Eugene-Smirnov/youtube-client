import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchService } from './youtube/services/search.service';
import { SearchParamInterceptor } from './youtube/interceptors/search.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    SearchService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SearchParamInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
