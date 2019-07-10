import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {

  @Output() filterProducts = new EventEmitter();

  filterForm: FormGroup;
  constructor() {
    this.filterForm = new FormGroup({
      text: new FormControl(''),
      category: new FormControl('')
    });

    this.filterForm.valueChanges
      .pipe(
        startWith({text: '', category: ''}),
        debounceTime(400))
      .subscribe(filter => this.filterProducts.emit(filter));
  }
}
