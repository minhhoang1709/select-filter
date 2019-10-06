import { EventEmitter } from '@angular/core';
import { AddressModel } from '../address/address.component';

export class FilterService {
    fromFilter = new EventEmitter<number[]>();

    toFilter = new EventEmitter<number[]>();
}
