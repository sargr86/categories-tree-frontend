import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesModule} from '../categories/categories.module';
import {ConfirmationDialogComponent} from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import {MaterialModule} from '@shared/modules/material.module';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    CategoriesModule,
    MaterialModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class CoreModule {
}
