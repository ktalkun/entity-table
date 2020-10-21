import {Component} from '@angular/core';
import {TableConfig} from '../../projects/table-lib/src/lib/table/table/model/table-config.model';
import {EntityColumnType} from '../../projects/table-lib/src/lib/table/table/model/entity-column-type.model';
import {ClassColumnType} from '../../projects/table-lib/src/lib/table/table/model/class-column-type.model';

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
        type: EntityColumnType.Text,
        placeholder: 'Name'
      },
      {
        property: 'surname',
        title: 'Surname',
        type: EntityColumnType.Text,
        placeholder: 'Surname'
      },
      {
        property: 'phone',
        title: 'Phone',
        type: EntityColumnType.Phone,
        placeholder: '+375(29)3152525',
        pattern: '\\+[0-9]{1,3}\\([0-9]{1,4}\\)[0-9]{4,14}'
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
    {
      name: 'Kirill1',
      surname: 'Tolkun',
      phone: '',
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
