import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '@core/services/categories.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories;
  editCase;

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryForm = this.fb.group({
      parent: [''],
      name: ['', Validators.required],
      id: ['']
    });

    const routeSnapshot = this.route.snapshot.paramMap as any;
    const id = +routeSnapshot.params.id;
    this.editCase = !!id;

    if (this.editCase) {
      this.categoriesService.getCategoryById({id}).subscribe((dt) => {
        this.categoryForm.patchValue(dt);
      });
    }
  }

  ngOnInit(): void {
    this.categoriesService.getList().subscribe((dt: any) => {
      this.categories = dt;
    });

  }

  saveCategory() {
    if (this.editCase) {
      this.categoriesService.update(this.categoryForm.value).subscribe(() => {
        this.router.navigate(['categories']).then(r => r);
      });
    } else {

      this.categoriesService.add(this.categoryForm.value).subscribe(() => {
        this.router.navigate(['categories']).then(r => r);
      });
    }
  }

}
