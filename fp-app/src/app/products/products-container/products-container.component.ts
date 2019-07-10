import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {


  currentPage = 1;
  currentFilter = {text: '', category: ''};
  products$: Observable<Product[]>;
  pages$: Observable<number>;
  constructor(private dataService: DataService) {
    this.products$ = this.dataService.products$;
    this.pages$ = this.dataService.totalPages$;
  }

  ngOnInit() {
  }

  handleFilter(filter) {
    this.currentFilter = filter;
    this.dataService.refreshProducts(this.currentPage, filter);
  }

  handlePageChange(page) {
    this.currentPage = page;
    this.dataService.refreshProducts(page, this.currentFilter);
  }

}
