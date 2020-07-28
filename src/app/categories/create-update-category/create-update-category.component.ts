import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '@core/services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories;

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.categoryForm = this.fb.group({
      parent: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoriesService.getList().subscribe((dt: any) => {
      this.categories = dt;
    });
  }

  saveCategory() {
    this.categoriesService.add(this.categoryForm.value).subscribe(() => {
      this.router.navigate(['categories']);
    });
  }

}
