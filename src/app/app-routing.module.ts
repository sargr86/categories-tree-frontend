import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './categories/index/index.component';
import {CreateUpdateCategoryComponent} from '@app/categories/create-update-category/create-update-category.component';


const routes: Routes = [
  {
    path: 'categories',
    component: IndexComponent
  },
  {
    path: 'categories/save',
    component: CreateUpdateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
