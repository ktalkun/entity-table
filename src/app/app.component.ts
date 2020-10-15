import {Component} from '@angular/core';
import {TableConfig} from "./table/model/table-config.model";
import {EntityColumnType} from "./table/model/entity-column-type.model";
import {ClassColumnType} from "./table/model/class-column-type.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableSettings: TableConfig = {
    entityCols: [
      {
        property: 'name',
        title: 'Name',
        type: EntityColumnType.Text
      },
      {
        property: 'surname',
        title: 'Surname',
        type: EntityColumnType.Text
      },
      {
        property: 'phone',
        title: 'Phone',
        type: EntityColumnType.Phone
      },
      {
        property: 'gender',
        title: 'Gender',
        type: EntityColumnType.Select,
        values: [
          'Male',
          'Female'
        ]
      }
    ],

    classCols: [
      {
        property: 'action',
        title: 'Actions',
        type: ClassColumnType.Button,
        actions: [
          {
            name: 'Del',
            do: (entity: object) => {
              this.tableData.splice(this.tableData.indexOf(entity), 1);
            }
          }
        ]
      }
    ],
  };
  tableData: Array<object> = [
    {
      name: 'Kirill',
      surname: 'Tolkun',
      phone: '375(2911)3271542',
      gender: 'Male'
    },
    {
      name: 'Kirill1',
      surname: 'Tolkun',
      phone: '+375293271542',
      gender: 'Male'
    },
    {
      name: 'Kirill1',
      surname: 'Tolkun',
      phone: '',
      gender: 'Male'
    },
  ];
}
