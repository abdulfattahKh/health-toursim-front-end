import { Component, OnInit } from "@angular/core";
import { AuthService } from "../Auth.service";
import { User } from "../../shared/user.model";
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private routes: Router,
    private Toastr: ToastrService
  ) { }

  title: string;
  signUpForm: FormGroup;
  identicalPassword: string;
  user: User;

  success: boolean;
  message: string;
  class: string;

  // strongRegexPassword = new RegExp(
  //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  // );

  mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
  );
  ngOnInit() {
    this.title = "sign up";
    this.success = false;
    this.message = "";
    this.init();
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.user = new User(this.signUpForm.value);
    this.AuthService.signUp(this.user).subscribe(
      data => {
        console.log(data);
        const data1 = data.json();
        if (data1.success) {
          this.class = "success";
          this.success = true;
          this.message = "you are ready to sign in";
          this.Toastr.success(this.message);
          setTimeout(() => {
            this.routes.navigate(["/auth/signin"]);
          }, 2000);
        } else {
          this.class = "warning";
          this.success = false;
          this.message = "the email is already exist";
          this.Toastr.error(this.message);
        }
        console.log(data);
      },
      err => {
        this.success = false;
        this.Toastr.error('there was an error');
      }
    );
  }

  init() {
    this.signUpForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ])
      }),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.checkEmail.bind(this)
      ),
      Password: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.pattern(this.mediumRegex)
          ]),
          confirmPassword: new FormControl(null, [Validators.required])
        },
        { validators: this.passwordConfirming }
      ),
      mobileNumber: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required])
    });

    this.signUpForm.patchValue({
      name: {
        firstName: "abdulfattah",
        lastName: "khudari"
      },
      email: "abdulfattah.khudari@gmail.com",
      Password: {
        password: "abdulfattah0952432706",
        confirmPassword: "abdulfattah0952432706"
      },
      Birthday: "5/5/1995",
      mobileNumber: "0952432706",
      gender: "male"
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get("password").value !== c.get("confirmPassword").value) {
      return { invalid: true };
    }
    return null;
  }

  checkEmail(control: FormControl) {
    const promise = new Promise((reslove, rejcet) => {
      this.AuthService.checkEmail(control.value).subscribe(response => {
        const RES = response.json();
        if (!RES.success) {
          reslove({ emailIsUsed: true });
        } else {
          reslove(null);
        }
      });
    });

    return promise;
  }
}
