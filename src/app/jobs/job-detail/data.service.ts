import { Injectable } from '@angular/core';

import { Data } from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datas: Data[] = [
    new Data(1, 'file 1'),
    new Data(2, 'file 2')
  ];

  constructor() { }

  getDatas() {
    return this.datas.slice();
  }

  getData(index: number) {
    return this.datas[index];
  }
}
