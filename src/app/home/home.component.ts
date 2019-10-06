import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../address/address.component';
import { FilterService } from '../shared/filter.service';

import example from '../../assets/addressData.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fromAddresses: AddressModel[];
  toAddresses: AddressModel[];
  originalAddresses: AddressModel[];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.originalAddresses = example;

    this.fromAddresses = this.originalAddresses.slice();
    this.toAddresses = this.originalAddresses.slice();

    this.filterService.fromFilter.subscribe((fromFilterList: number[]) => {
      console.log(fromFilterList.length);
      if (fromFilterList.length === 0) {
        return this.toAddresses = this.originalAddresses.slice();
      }
      this.toAddresses = this.toAddresses.filter((address) => fromFilterList.includes(address.value));

    });

    this.filterService.toFilter.subscribe((toFilterList: number[]) => {
      if (toFilterList.length === 0) {
        return this.fromAddresses = this.originalAddresses.slice();
      }
      this.fromAddresses = this.fromAddresses.filter((address) => toFilterList.includes(address.value));
    });
  }

}
