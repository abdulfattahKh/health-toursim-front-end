import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MainService } from '../services/main.service';
@Injectable({
  providedIn: "root"
})
export class UtiliesService {
  baseUrl: string = "http://localhost:3000/";
  constructor(
    private api: HttpClient,
    private mainService: MainService
  ) { }

  getSelectItem(url) {
    return this.api.get<{ success: boolean; message: any; data: any[] }>(
      this.baseUrl + url
    );
  }

  getSmartTableData(url) {
    return this.api.get<{ success: boolean; message: any; data: any }>(
      this.baseUrl + url
    );
  }

  deleteSmartTableItem(url: string, id: number) {
    return this.mainService.delete(url, id);
  }
}
