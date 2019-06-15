import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AutoCompleteService } from './auto-complete.service';
@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {


  @Input() title: string;
  @Output() itemsResult: EventEmitter<any> = new EventEmitter();
  @Output() onSelectItem: EventEmitter<any> = new EventEmitter();
  searching = false;
  searchFailed = false;
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;

  constructor(
    private _service: AutoCompleteService
  ) { }
  ngOnInit() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => {
          let data = this._service.search(token);
          data.subscribe(items => {
            this.itemsResult.emit(items);
          })
          return data;
        })
      );
  }

  typeaheadOnSelect(item) {
    this.onSelectItem.emit(item);
  }



}
