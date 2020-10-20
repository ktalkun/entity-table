import {Component, Input} from '@angular/core';

@Component({
  selector: 'tl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() config: object;
  @Input() data: Array<object>;

  constructor() {
  }
}
