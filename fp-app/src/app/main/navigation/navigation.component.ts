import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  name = '';
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {

    this.isLoggedIn$ = authService.isLoggedIn$.pipe(tap(l => this.name = l ? authService.name : ''));
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
