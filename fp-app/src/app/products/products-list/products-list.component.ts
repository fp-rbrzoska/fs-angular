import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];

  ngOnInit() {
  }

}
