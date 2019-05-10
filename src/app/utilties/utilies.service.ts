import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UtiliesService {
  baseUrl: string = "http://localhost:3000/";
  constructor(private api: HttpClient) {}

  getSelectItem(url) {
    return this.api.get<{ success: boolean; message: any; data: any[] }>(
      this.baseUrl + url
    );
  }
}
