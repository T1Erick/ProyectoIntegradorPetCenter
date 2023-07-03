import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private cokkieService =inject(CookieService)
  private router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const Jsonusuario= this.cokkieService.get('user')
    const payload: any = jwt_decode(Jsonusuario);
    const rol = payload.role.namerol
    if (rol === 'Admin') {
      return true

    } else {
      this.router.navigate(['login'])

    }return false


  }

}
