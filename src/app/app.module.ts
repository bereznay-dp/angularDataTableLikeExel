import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataCellComponent } from './data-cell/data-cell.component';
import { MyAutofocusDirective } from './my-autofocus.directive';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { DataCellTypeheadComponent } from './data-cell-typehead/data-cell-typehead.component';
import { KeyLisnDirective } from './key-lisn.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DataCellComponent,
    MyAutofocusDirective,
    DataCellTypeheadComponent,
    KeyLisnDirective

  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    NgxTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
