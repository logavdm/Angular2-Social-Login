import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthendicateService } from './authendicate.service';


@Injectable()
export class LoggedInGuard implements CanActivate {


constructor(private auth:AuthendicateService) {}

  canActivate() {
    return this.auth.isLogged();
  }

}