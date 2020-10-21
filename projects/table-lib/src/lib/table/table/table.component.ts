import {Component, Input} from '@angular/core';
import {EntityColumnType} from './model/entity-column-type.model';
import {ClassColumnType} from './model/class-column-type.model';
import {TableConfig} from './model/table-config.model';

@Component({
  selector: 'tl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() config: TableConfig;
  @Input() data: Array<object>;
  readonly entityColumnType: typeof EntityColumnType = EntityColumnType;
  readonly classColumnType: typeof ClassColumnType = ClassColumnType;

  constructor() {
  }
}
