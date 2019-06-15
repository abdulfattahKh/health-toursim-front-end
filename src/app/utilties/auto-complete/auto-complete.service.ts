import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MainService } from '../../services/main.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {


  items:any[];
  constructor(
    private api: MainService
  ) { }

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.api.get("procedure/getProcAccordToAutoComplate/" + term)
      .pipe(map(response => {
        // let values;
        // this.items = response['data'];
        // values = this.items.map(value=>{
        //   return value['name'];
        // })
        // return values;
        return response['data'];
      }));

  }


}
