import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ContactMessage } from '../models/contact-message';
import { of } from 'rxjs';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private totalProducts = 0;
  constructor(private http: HttpClient) { }

  getRandomProducts(itemsNumber = 3) {
    const pages = Math.ceil(this.totalProducts / itemsNumber);
    const randomPage = Math.floor(Math.random() * (pages  + 1)) || 1;

    return this.http.get(apiUrl + '/products', {
      observe: 'response',
      params: {
        _page: randomPage.toString(),
        _limit: itemsNumber.toString()
      }
    }).pipe(
      tap((res: HttpResponse<Product[]>) => {
        this.totalProducts = parseInt(res.headers.get('x-total-count'), 0);
      }),
      map( (res: HttpResponse<Product[]>) => res.body)
    );
  }

  sendContactMessage(msg: ContactMessage) {
    return this.http.post(apiUrl + '/contact', msg);
  }
}
