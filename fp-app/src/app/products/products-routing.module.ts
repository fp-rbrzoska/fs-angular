import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

const routes: Routes = [
  { path: 'products', children: [
      { path: '', component: ProductsContainerComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
