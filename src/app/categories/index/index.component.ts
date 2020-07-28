import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {CategoriesService} from '@core/services/categories.service';



interface FoodNode {
  name: string;
  children?: FoodNode[];
  category_id: number;
  parent?: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('tree') tree;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(
    private categoriesService: CategoriesService
  ) {

    console.log(this.dataSource)
  }

  ngOnInit(): void {
    this.categoriesService.get().subscribe((dt: any) => {
      this.dataSource.data = dt;
    });
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  drop(e) {

  }


  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }

}
