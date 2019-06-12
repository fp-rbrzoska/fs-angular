import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() products: Product[] = [];
  constructor() { }

  ngOnInit() {
  }

}
