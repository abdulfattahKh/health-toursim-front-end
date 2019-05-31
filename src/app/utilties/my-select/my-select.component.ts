import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { UtiliesService } from "../utilies.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "my-select",
  templateUrl: "./my-select.component.html",
  styleUrls: ["./my-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MySelectComponent),
      multi: true
    }
  ]
})
export class MySelectComponent implements OnInit, ControlValueAccessor {
  onChange: (value) => {};
  onTouched: () => {};
  disable: boolean;

  @Input("apiName") apiName: string;
  @Input("items") items: any[];
  @Input("type") type: string;

  @Input("bindLabel") bindLabel: any;
  @Input("bindValue") bindValue: any;
  selectItems: any[];
  @Input() selectedItem: any;
  constructor(
    private utilityService: UtiliesService,
    private ToastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    if (this.type === 'api') {
      this.getItemsFromApi();
    } else {
      this.selectItems = this.items;
    }
  }
  getItemsFromApi() {
    this.utilityService.getSelectItem(this.apiName).subscribe(
      data => {
        if (data.success === true) {
          this.selectItems = data.data;
          this.ToastrService.success("get my roles");
        } else {
          this.ToastrService.error("there was an error");
          this.selectItems = [];
        }
      },
      err => {
        this.ToastrService.error("there was an error");
      }
    );
  }

  onChangeSelect() {
    this.onChange(this.selectedItem);
  }

  writeValue(obj: any): void {
    this.selectedItem = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
}
