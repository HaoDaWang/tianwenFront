import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from './user.service';

@Injectable()
export class PaneGuard implements CanActivate {
    constructor(
        private user:User,
        private router:Router
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.user.username) return true;
        else {
            this.router.navigate(['main'])
            return false;
        };
    }
}