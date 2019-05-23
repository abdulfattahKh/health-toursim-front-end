import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  //@Input() items: { name: string, type: string, label: string, validators: any[], apiName: string }[];
  @Input() items: any;
  @Input() proccessType;

  @Output("onSubmit") submit = new EventEmitter();
  lang: string;
  validators;
  Form: FormGroup;
  display: boolean = false;
  constructor(
    private translate: TranslationService,
    private api: MainService
  ) { }

  ngOnInit() {
    this.validators = {};
    this.validators['required'] = Validators.required
    this.validators['minLength'] = Validators.minLength(2)
    this.validators['maxLength'] = Validators.maxLength(100);
    this.lang = localStorage.getItem('lang');

    this.Form = new FormGroup({});
    let formControl: FormControl;
    this.items.forEach(item => {
      item.label = this.translate.translateWord("formCreator." + item.label);
      if (item.validators) {
        formControl = new FormControl(null, this.getValidator(item.validators[0]));
      } else {
        formControl = new FormControl(null);
      }
      if (item.type == 'selectApi') {
        this.getItems(item);
      }
      this.Form.addControl(item.name, formControl);
    })

  }


  getValidator(name: string) {

    return this.validators[name]
  }

  getItems(item) {
    this.api.get(item.apiName).subscribe(data => {
      item.items = data['data'];
      this.display = true;
    })
  }

  onSubmit() {
    this.submit.emit(this.Form.value);
    this.Form.reset();
  }

}
