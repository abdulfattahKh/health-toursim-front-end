import { Injectable } from '@angular/core';
import { MainService } from '../../services/main.service';

@Injectable()
export class FormCreatorService {
  constructor(
    private mainService: MainService
  ) { }

  getDefaultFormValues(url, id) {
    return this.mainService.get(url + '/' + id);
  }
}
