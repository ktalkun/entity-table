import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableSettings: object = {
    entityCols: [
      {
        property: 'name',
        title: 'Name',
        type: 'text'
      },
      {
        property: 'surname',
        title: 'Surname',
        type: 'text'
      },
      {
        property: 'phone',
        title: 'Phone',
        type: 'tel'
      },
      {
        property: 'gender',
        title: 'Gender',
        type: 'select',
        config: {
          false: 'Male',
          true: 'Female',
        }
      }
    ],

    classCols: [
      {
        property: 'action',
        title: 'Actions',
        type: 'button',
        values: [
          {
            name: 'Edit',
            execute: (rowNum: number) => {
              return rowNum;
            }
          },
          {
            name: 'Del',
            execute: (rowNum: number) => {
              this.tableData.splice(rowNum, 1);
            }
          }
        ]
      }
    ],

    values: [
      {
        name: 'Edit',
        execute: (rowNum: number) => {
          return rowNum;
        }
      },
      {
        name: 'Del',
        execute: (rowNum: number) => {
          this.tableData.splice(rowNum, 1);
        }
      }
    ],
  };
  tableData: Array<object> = [
    {
      name: 'Kirill',
      surname: 'Tolkun',
      phone: '+375293271542',
      gender: 'Male'
    },
    {
      name: 'Kirill1',
      surname: 'Tolkun',
      phone: '+375293271542',
      gender: 'Male'
    },
  ];
}
