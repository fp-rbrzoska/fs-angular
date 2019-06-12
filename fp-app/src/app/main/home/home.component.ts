import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randomProducts: Product[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getRandomProducts().subscribe(data => this.randomProducts = data);
    setInterval(() => {
      this.dataService.getRandomProducts().subscribe(data => this.randomProducts = data);
    }, 30000);
  }

  ngOnInit() {
  }

}
