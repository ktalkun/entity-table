import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {InputMobileComponent} from "./input-mobile/input-mobile.component";
import {InputSelectComponent} from "./input-select/input-select.component";
import {InputTextComponent} from "./input-text/input-text.component";
import {TableComponent} from "./table/table.component";
import {FormsModule} from "@angular/forms";
import {MobileValidatorDirective} from "./mobile-validator.directive";


@NgModule({
  declarations: [
    ButtonComponent,
    InputMobileComponent,
    InputSelectComponent,
    InputTextComponent,
    TableComponent,
    MobileValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
}
