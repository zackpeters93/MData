import { Injectable } from '@angular/core';

import { Data } from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datas: Data[] = [
    new Data(1, 'http://www.mtcinternal.net/MTC_Downloads/100 - PT Loma_86_2011/ptloma8611-1Rdat4.zip'),
    new Data(2, 'http://www.mtcinternal.net/MTC_Downloads/100 - PT Loma_86_2011/Tk 86 2011 Rpt Final.pdf')
  ];

  constructor() { }

  getDatas() {
    return this.datas.slice();
  }

  getData(index: number) {
    return this.datas[index];
  }
}
