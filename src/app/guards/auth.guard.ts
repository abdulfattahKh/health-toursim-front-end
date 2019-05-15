import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../Auth/Auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route, state): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.getIsAuthenticated()) {
      this.router.navigate(["auth/signin"]);
      return false;
    }
    return true;
  }
}
