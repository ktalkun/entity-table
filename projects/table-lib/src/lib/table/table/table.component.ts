import {Component, Input} from '@angular/core';
import {EntityColumnType} from "./model/entity-column-type.model";
import {ClassColumnType} from "./model/class-column-type.model";

@Component({
  selector: 'tl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() config: object;
  @Input() data: Array<object>;
  readonly entityColumnType: typeof EntityColumnType = EntityColumnType;
  readonly classColumnType: typeof ClassColumnType = ClassColumnType;

  constructor() {
  }
}
