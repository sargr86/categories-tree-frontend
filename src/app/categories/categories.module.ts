import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {SharedModule} from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { CreateUpdateCategoryComponent } from './create-update-category/create-update-category.component';


@NgModule({
  declarations: [IndexComponent, CreateUpdateCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
