import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsContainerComponent } from './products-container/products-container.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsFilterComponent, ProductDetailsComponent, ProductsContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
