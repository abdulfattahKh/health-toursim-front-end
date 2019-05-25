import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../Auth.service";
import { EventEmitter } from "events";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  signedIn: boolean;
  message: string;
  ClassStyle: string;
  title: string;
  mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
  );
  constructor(
    private authService: AuthService,
    private router: Router,
    private toster: ToastrService
  ) {
    this.init();
    //this.test();
  }

  ngOnInit() {
    this.signInForm.patchValue({
      email: "abdulfattah.khudari@gmail.com",
      password: "abdulfattah0952432706"
    });
    this.authService.SignIn.subscribe(response => {
      if (response) {
        this.signedIn = true;
        this.ClassStyle = "success";
        this.message = "signed in correctly";
        this.toster.success(this.message);

        // window.location.reload();
        this.router.navigate(["/dashboard"]);
      } else {
        this.signedIn = false;
        this.ClassStyle = "warning";
        this.message = "either the email or the password is not correct";
        this.toster.success(this.message);
      }
    });

    /*this.authService.fillSignIn.subscribe(
      (user: { email: string; password: string }) => {
        console.log(user);
        this.signInForm.patchValue({
          email: user.email,
          password: user.password
        });
        console.log(this.signInForm.value);
      }
    );*/
  }

  onSubmit() {
    this.authService.signIn(this.signInForm.value);
  }

  init() {
    this.signedIn = false;
    this.message = "";
    this.title = "sign in";
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(this.mediumRegex)
      ])
    });
  }

  test() { }
}
