import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {InputTextComponent} from './input-text/input-text.component';
import {FormsModule} from "@angular/forms";
import {InputMobileComponent} from './input-mobile/input-mobile.component';
import {ButtonComponent} from './button/button.component';
import {InputSelectComponent} from './input-select/input-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputTextComponent,
    InputMobileComponent,
    ButtonComponent,
    InputSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
