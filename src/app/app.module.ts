import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FilterService } from './shared/filter.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NoopAnimationsModule
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
