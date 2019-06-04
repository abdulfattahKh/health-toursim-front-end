import { CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../Auth/Auth.service";
import { PrivilegesService } from '../services/privileges.service';

@Injectable()
export class privilegesGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private privilegesService: PrivilegesService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state): boolean | Observable<boolean> | Promise<boolean> {

    const privileges = route.routeConfig['data'];

    if (!privileges) {
      return true;
    }
    const authored: boolean = this.privilegesService.isAuthorized(privileges);

    if (!authored) {
      //this.router.navigate(['/'])
    }
    return authored;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    const privileges = childRoute.routeConfig['data'];

    if (!privileges) {
      return true;
    }
    const authored: boolean = this.privilegesService.isAuthorized(privileges);

    if (!authored) {
    }
    return authored;
  }
}
