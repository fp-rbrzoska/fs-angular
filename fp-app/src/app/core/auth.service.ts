import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject(false);
  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }

  constructor(private oauthService: OAuthService) {
    if (this.oauthService.hasValidAccessToken()) {
      this.isLoggedInSubject.next(true);
    }
    this.oauthService.events.subscribe(e => {
      if (e.type === 'token_received') {
        this.isLoggedInSubject.next(true);
      }
      if (e.type === 'logout') {
        this.isLoggedInSubject.next(false);
      }
    });
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get name() {
    const  claims: any = this.oauthService.getIdentityClaims();
    if (!claims) { return null; }
    return claims.given_name;
  }

}
