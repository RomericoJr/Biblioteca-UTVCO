import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { AuthService } from '../service/laravel/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth:AuthService,
    private router:Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.auth.status().pipe(take(1),map((loggedIn:boolean)=>{
     if(loggedIn){
       return true;
     }else{
      return this.router.createUrlTree(['/auth/login']);
     }
   }));
  }

}
