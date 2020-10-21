import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableComponent} from './table.component';
import {InputMobileComponent} from '../input-mobile/input-mobile.component';
import {InputSelectComponent} from '../input-select/input-select.component';
import {ButtonComponent} from '../button/button.component';
import {EntityColumnType} from './model/entity-column-type.model';
import {ClassColumnType} from './model/class-column-type.model';
import {FormsModule} from '@angular/forms';
import {MobileValidatorDirective} from '../mobile-validator.directive';
import {InputTextComponent} from '../input-text/input-text.component';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {TableConfig} from './model/table-config.model';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'test-table',
  template: `
    <tl-table #testTable [config]='config' [data]='data'></tl-table>
  `
})
class TestComponent {
  @ViewChild('testTable')
  tableComponent: TableComponent;

  config: TableConfig = {
    entityCols: [
      {
        property: 'name',
        title: 'Name',
        type: EntityColumnType.Text,
        placeholder: 'Name'
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
              this.data.splice(this.data.indexOf(entity), 1);
            }
          }
        ]
      }
    ],
  };

  data: Array<Object> = [
    {
      name: 'Kirill',
      phone: '375(2911)3271542',
      gender: 'Male'
    },
    {
      name: 'Kirill1',
      phone: '+375293271542',
      gender: 'Male'
    },
    {
      name: 'Kirill1',
      phone: '',
      gender: 'Male'
    }
  ];

  constructor() {
  }
}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        ButtonComponent,
        InputMobileComponent,
        InputSelectComponent,
        InputTextComponent,
        MobileValidatorDirective,
        TestComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.tableComponent;
    debugElement = fixture.debugElement.query(By.directive(TableComponent));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has 3 rows', () => {
    let numRows: number = debugElement.queryAll(By.css('tbody tr')).length;
    expect(numRows).toEqual(3);
  });

  it('should has 4 rows after 1 item added', () => {
    component.data.push({
      name: 'NewName',
      phone: '375(2911)3271542',
      gender: 'Male'
    })
    fixture.detectChanges();
    let numRows: number = debugElement.queryAll(By.css('tbody tr')).length
    expect(numRows).toEqual(4);
  });

  it('should has 2 rows after 1 item direct removed', () => {
    component.data.splice(0, 1);
    fixture.detectChanges();
    let numRows: number = debugElement.queryAll(By.css('tbody tr')).length;
    expect(numRows).toEqual(2);
  });

  it('should has 2 rows after 1 row removed by action', () => {
    component.config['classCols'][0].actions[0].do(component.data[0]);
    fixture.detectChanges();
    let numRows: number = debugElement.queryAll(By.css('tbody tr')).length;
    expect(numRows).toEqual(2);
  });
});
