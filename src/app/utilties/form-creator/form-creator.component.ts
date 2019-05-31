import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { MainService } from '../../services/main.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { UtiliesService } from '../utilies.service';
import { ToastrService } from 'ngx-toastr';
import { FormCreatorService } from './form-creator.service';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  providers: [FormCreatorService]
})
export class FormCreatorComponent implements OnInit {

  //@Input() items: { name: string, type: string, label: string, validators: any[], apiName: string }[];

  @Input() items: any;
  @Input() title: string;
  @Input() apiName: string;
  @Input() fieldIndex: string;
  @Input() updatingApi: string;
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


    private api: MainService,
    private tostr: ToastrService,
    private Route: ActivatedRoute,
    private fieldService: FieldsService,
    private translate: TranslationService,
    private utiliesService: UtiliesService,
    private FormCreatorService: FormCreatorService,

  ) { }
  ngOnInit() {
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
    this.items = this.fieldService.getFields(this.fieldIndex);
    this.lang = localStorage.getItem('lang');

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
      // if (item.type == 'selectApi') {
      //   this.getItems(item);
      // }
      this.Form.addControl(item.name, formControl);
    })


    this.display = true;
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


  // getValidator(name: string) {

  //   return this.validators[name]
  // }

  // getItems(item) {
  //   this.api.get(item.apiName).subscribe(data => {
  //     item.items = data['data'];
  //     this.display = true;
  //   })
  // }

  onChange(type, value) {
    if (this.Form.get(type).invalid || !this.updatingForm) {
      return;
    }

  }

  onSubmit() {
    this.submit.emit(this.Form.value);
    console.log(this.Form);
    //this.Form.reset();
  }

}
