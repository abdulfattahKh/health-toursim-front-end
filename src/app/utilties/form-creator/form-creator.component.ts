import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormCreatorService } from './form-creator.service';
import { FieldsService } from '../../services/fields.service';
import { DatePipe } from '@angular/common';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  providers: [FormCreatorService, DatePipe]
})
export class FormCreatorComponent implements OnInit {

  //@Input() items: { name: string, type: string, label: string, validators: any[], apiName: string }[];

  @Input() items: any;
  @Input() title: string;
  @Input() apiName: string;
  @Input() addingApi: string;
  @Input() navigateTo: string;
  @Input() fieldIndex: string;
  @Input() updatingApi: string;
  @Input() columnNameToSave: string;
  @Input() updateInternally: boolean;
  @Input() updatingValueApiTo: string;
  @Input() addInternally: boolean = true;

  @Output("onSubmit") submit = new EventEmitter();
  lang: string;
  validators;

  Form: FormGroup;
  display: boolean = false;
  id: number;
  defaultValues: any[];
  updatingForm: boolean = false;
  creatingForm: boolean = false;
  constructor(

    private datePipe: DatePipe,
    private tostr: ToastrService,
    private Route: ActivatedRoute,
    private router: Router,
    private api: MainService,
    private fieldService: FieldsService,
    private translate: TranslationService,
    private FormCreatorService: FormCreatorService,
  ) { }
  ngOnInit() {

    this.items = this.fieldService.getFields(this.fieldIndex);
    this.lang = localStorage.getItem('lang');
    this.Route.params.subscribe(param => {
      this.id = param['id'];
      if (this.id) {
        this.title = this.translate.translateWord("edit" + this.title);
        this.updatingForm = true;
        this.getDefaultValues();
      } else {
        this.title = this.translate.translateWord("add" + this.title);
        this.creatingForm = true;
        this.initForm();
      }
    })
  }

  initForm() {
    this.Form = new FormGroup({});
    let formControl: FormControl;
    this.items.forEach(item => {
      item.label = item.label.toLowerCase();
      item.label = this.translate.translateWord(item.label);
      if (item.validators) {
        formControl = new FormControl(null, item.validators, item.asyncValidators);
      } else {
        formControl = new FormControl(null);
      }
      if (!!item.basedOn && item.basedOn.length != 0) {
        this.initListeners(item);
      }
      this.Form.addControl(item.name, formControl);
    })


    this.display = true;
  }

  initListeners(item: any) {
    if (Array.isArray(item.basedOn)) {
      item.basedOn.forEach(field => {
        this.Form.get(field).valueChanges.subscribe(value => {
          this.getItems(item, value);
        })
      })
    }
  }

  getDefaultValues() {
    this.FormCreatorService.getDefaultFormValues(this.updatingApi, this.id)
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success(data['message'], 'success');
          this.defaultValues = data['data'];
          this.initForm();

          this.Form.patchValue(this.defaultValues[0]);
          this.Form.updateValueAndValidity();


        } else {
          this.tostr.error(data['message'], 'error');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      });
  }



  getItems(item, value) {
    console.log(value);
    this.api.get(item.apiName + "" + value[item.bindValue]).subscribe(data => {
      if (item.type == "selectApi") {
        item.items = data['data'];
      }
    })
  }

  onChange(field, type = "") {

    if (this.Form.get(field).invalid || !this.updatingForm) {
      return;
    }

    let value;
    value = this.Form.get(field).value;
    if (type == 'selectApi') {
      value = this.Form.get(field).value['id'];
    }
    if (type == 'date') {
      value = this.datePipe.transform(value, 'yyyy-MM-dd');
    }
    this.FormCreatorService.saveValues(
      this.updatingValueApiTo,
      {
        fieldName: field,
        columnName: this.columnNameToSave,
        [this.columnNameToSave]: this.id,
        tableName: this.fieldIndex,
        value
      }
    )
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success(data['message'], 'success');
        } else {
          this.tostr.error(data['message'], 'error');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      });
  }

  onSubmit() {
    if (this.addInternally) {
      this.addValues();
    } else {
      this.submit.emit(this.Form.value);
    }
    //this.Form.reset();
  }


  addValues() {
    this.FormCreatorService.addValues(this.addingApi, this.Form.value)
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success(data['message'], 'success');
          if (this.navigateTo != "" && this.navigateTo) {
            this.router.navigateByUrl(this.navigateTo);
          } else {
            this.router.navigate(['../'], { relativeTo: this.Route });
          }
        } else {
          this.tostr.error(data['message'], 'error');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      });
  }


}
