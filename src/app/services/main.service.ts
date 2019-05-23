import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";



@Injectable()
export class MainService {
  api = environment.api;
  header = new HttpHeaders();
  constructor(private http: HttpClient) {

  }

  // Uses http.get() to load data from a single API endpoint
  get(name, params?: HttpParams) {
    if (localStorage.getItem('token'))
      this.header = this.header.set('authorization', localStorage.getItem('token'));
    else {

    }
    if (params) {
      return this.http.get(this.api + name, { params: params, headers: this.header });
    }
    return this.http.get(this.api + name, { params: params, headers: this.header });

  }
  post(name, data) {
    if (localStorage.getItem('token'))
      this.header = this.header.set('authorization', localStorage.getItem('token'));
    else {

    }
    return this.http.post(this.api + name, data, { headers: this.header });
  }
  put(name, data) {
    if (localStorage.getItem('token'))
      this.header = this.header.set('authorization', localStorage.getItem('token'));
    else {

    }
    return this.http.put(this.api + name, data, { headers: this.header });
  }
  delete(name, id) {
    if (localStorage.getItem('token'))
      this.header = this.header.set('authorization', localStorage.getItem('token'));
    else {

    }
    return this.http.delete(this.api + name + '\\' + id, { headers: this.header });
  }

  getFields(name) {
    var fields = {};
    fields['addRole'] = [
      // { name: "role_id", type: "selectApi", apiName: "roles/roles", bindLable: "role_id", bindValue: "role_name", label: "role id" }
    ]
    return fields[name];
  }

  getSettings() {

  }
}
