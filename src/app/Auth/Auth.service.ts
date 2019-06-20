import { OnInit, Injectable } from "@angular/core";
import { User } from "../shared/user.model";
import { Http, Headers } from "@angular/http";
import { Subject } from "rxjs";
import { EventEmitter } from "events";
import { Router } from "@angular/router";
@Injectable()
export class AuthService implements OnInit {
  private token: string;
  private expiresIn: string;
  private isAuthenticated: boolean = false;
  SignIn = new Subject<boolean>();
  private userId: string;
  private user;
  timer: any;

  //fillSignIn = new Subject();
  constructor(private http: Http, private router: Router) {
    console.log("AuthService");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUserId() {
    return this.user.id;
  }

  getUser() {
    return this.user;
  }

  getUserInformation() {
    const header = new Headers({
      authorization: localStorage.getItem("token")
    });
    return this.http.get("http://localhost:3000/auth/userInformation", {
      headers: header
    });
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  private storeTheToken(token: string, expiredTime, user: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiredTime", expiredTime);
    localStorage.setItem("user", JSON.stringify(user));
  }

  private clearTheToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiredTime");
    localStorage.removeItem("user");
  }

  private link: "localhost:3000/";
  ngOnInit() { }

  signUp(user: User) {
    return this.http.post("http://localhost:3000/auth/signup", user);
  }

  signIn(user: { email: string; password: string }) {
    return this.http
      .post("http://localhost:3000/auth/signin", user)
      .subscribe(Response => {
        const data = Response.json();
        if (data.token) {
          this.token = data.token;
          this.expiresIn = data.expiresIn;
          this.user = data.user;
          this.userId = data.user.id;
          // this.timer = setTimeout(() => {
          //   this.logOut();
          // }, data.expiresIn * 1000);
          const now = new Date();
          const expiredTime = new Date(now.getTime() + data.expiresIn * 1000);
          this.storeTheToken(data.token, expiredTime, data.user);
          this.isAuthenticated = true;
          this.SignIn.next(true);
        } else {
          this.isAuthenticated = false;
          this.SignIn.next(false);
          this.userId = null;
          this.user = null;
        }
      });
  }


  autoAuth() {
    const info = this.getAuthInformation();
    const now = new Date();
    if (!info) return;
    const dateCheck = now.getTime() - info.expiredTime.getTime();
    if (dateCheck < 0) {
      // setTimeout(() => {
      //   this.logOut();
      // }, Math.abs(dateCheck));
      this.token = info.token;
      this.user = info.user;
      this.userId = info.user.id;
      this.isAuthenticated = true;
      this.SignIn.next(true);
    }
  }

  private getAuthInformation() {
    const dateExpiration = localStorage.getItem("expiredTime");
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token || !dateExpiration) {
      return;
    }
    return {
      token: token,
      expiredTime: new Date(dateExpiration),
      user: user
    };
  }

  logOut() {
    this.router.navigate(["/auth/signin"]);
    this.token = null;
    this.clearTheToken();
    this.isAuthenticated = false;
    clearTimeout(this.timer);
    window.location.reload();
    this.SignIn.next(false);
    this.userId = null;
    this.user = null;
  }

  checkEmail(email) {
    return this.http.post("http://localhost:3000/auth/checkEmail", { email });
  }

  getAllUsers() {
    const header = new Headers({
      authorization: localStorage.getItem("token")
    });
    this.http
      .get("http://localhost:3000/auth/getAllUsers", { headers: header })
      .subscribe(response => {
        const data = response.json();
      });
  }
}
