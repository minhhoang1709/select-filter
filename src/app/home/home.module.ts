import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AddressModule } from '../address/address.module';
import { FilterService } from '../shared/filter.service';



@NgModule({
  imports: [
    CommonModule,
    AddressModule
  ],
  declarations: [HomeComponent],
  providers: [FilterService],
  exports: [HomeComponent],
})
export class HomeModule { }
