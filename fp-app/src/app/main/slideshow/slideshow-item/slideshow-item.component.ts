import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-slideshow-item',
  templateUrl: './slideshow-item.component.html',
  styleUrls: ['./slideshow-item.component.scss']
})
export class SlideshowItemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
