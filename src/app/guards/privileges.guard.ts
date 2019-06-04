import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../Auth/Auth.service";
import { PrivilegesService } from '../services/privileges.service';

@Injectable()
export class privilegesGuard implements CanActivate {
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

    console.log(authored);
    // if (!authored) {
    //   this.router.navigate(['../'])
    // }
    return authored;
  }
}
