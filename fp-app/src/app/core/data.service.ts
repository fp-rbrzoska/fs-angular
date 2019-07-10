import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ContactMessage } from '../models/contact-message';
import { BehaviorSubject, of } from 'rxjs';
const apiUrl = environment.apiUrl;

@Injectable()
export class DataService {

  private totalProductsSubject = new BehaviorSubject(0);
  private productsSubject = new BehaviorSubject<Product[]>([]);

  get products$() {
    return this.productsSubject.asObservable();
  }
  get totalPages$() {
    return this.totalProductsSubject.asObservable().pipe(map(products => Math.ceil(products / 10)));
  }
  constructor(private http: HttpClient) { }

  getRandomProducts(itemsNumber = 3) {
    const pages = Math.ceil(this.totalProductsSubject.getValue() / itemsNumber);
    const randomPage = Math.floor(Math.random() * (pages  + 1)) || 1;

    return this.http.get(apiUrl + '/products', {
      observe: 'response',
      params: {
        _page: randomPage.toString(),
        _limit: itemsNumber.toString()
      }
    }).pipe(
      tap((res: HttpResponse<Product[]>) => {
        this.totalProductsSubject.next(parseInt(res.headers.get('x-total-count'), 0));
      }),
      map( (res: HttpResponse<Product[]>) => res.body)
    );
  }

  refreshProducts(pageNumber = 1, filter = { text: '', category: ''}) {
    this.http.get<Product[]>(apiUrl + '/products', {
      params: {
        _page: pageNumber.toString(),
        _limit: '10',
        ...filter.text && {q: filter.text },
        ...filter.category && {category: filter.category}
      }
    }).subscribe(prods => this.productsSubject.next(prods));
  }

  sendContactMessage(msg: ContactMessage) {
    return this.http.post(apiUrl + '/contact', msg);
  }
}
