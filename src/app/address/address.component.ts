import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../shared/filter.service';

export class AddressModel {
  value: number;
  label: string;
  fromFilterList: number[];
  toFilterList: number[];

  constructor(value: number, label: string, fromFilterList: number[], toFilterList: number[]) {
    this.value = value;
    this.label = label;
    this.fromFilterList = fromFilterList;
    this.toFilterList = toFilterList;
  }
}

@Component({
  selector: 'app-address',
  template: `
    <select class="address-select" [(ngModel)]="selectedAddress" (ngModelChange)="onFilter()">
      <option class="address-option" *ngFor="let address of addresses" [ngValue]="address">
      {{address.label}}
      </option>
    </select>
  `,
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  constructor(private filterService: FilterService) { }

  selectedAddress: AddressModel;

  @Input()
  source: string;

  @Input()
  addresses: AddressModel[];

  ngOnInit() {
  }

  onFilter() {

    if (this.source === 'from') {
      this.filterService.fromFilter.emit(this.selectedAddress.fromFilterList);
    } else if (this.source === 'to') {
      this.filterService.toFilter.emit(this.selectedAddress.toFilterList);
    }
  }
}
