import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '@core/services/categories.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private toastr: ToastrService
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
        this.toastr.success('The category details have been updated successfully');
        this.router.navigate(['categories']).then(r => r);
      });
    } else {

      this.categoriesService.add(this.categoryForm.value).subscribe(() => {
        this.toastr.success('The category has been added successfully');
        this.router.navigate(['categories']).then(r => r);
      });
    }
  }

}
