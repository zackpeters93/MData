import { Component, OnInit, Input } from '@angular/core';

import { Data } from '../../data.model';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
  @Input() data: Data;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
