import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AddressComponent],
  providers: [],
  exports: [AddressComponent],
})

export class AddressModule { }
