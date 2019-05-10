export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthday: string;
  gender: string;
  roleId: number;
  mobileNumber: number;

  constructor(values) {
    this.firstName = values.name.firstName;
    this.lastName = values.name.lastName;
    this.birthday = values.birthday.toJSON()
      .slice(0, 10);;
    this.email = values.email;
    this.password = values.Password.password;
    this.confirmPassword = values.Password.confirmPassword;
    this.gender = values.gender;
    this.roleId = values.role;
    this.mobileNumber = values.mobileNumber;
  }
}
