import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { UtiliesService } from "../utilies.service";
import { PrivilegesService } from '../../services/privileges.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { promise } from 'selenium-webdriver';
import { FieldsService } from '../../services/fields.service';
@Component({
  selector: 'my-smart-table',
  templateUrl: './my-smart-table.component.html',
  styleUrls: ['./my-smart-table.component.scss']
})
export class MySmartTableComponent implements OnInit {


  @Input('tableName') tableName: string;
  @Input('apiName') apiName: string;
  @Input('fieldIndex') fieldIndex: string;
  @Input('settings') settings: any;
  @Input('dataSource') dataSource: any[];
  @Input('Dcolumns') columnsToDisplay: any[];
  @Input('Hcolumns') columnsToHide: any[];
  @Input('addingUrl') addingUrl: string;
  @Input('deletionUrl') deletionUrl: string;
  @Input('editingUrl') editingUrl: string;

  @ViewChild('confirmModal') private confirmModal;
  lang: string;
  title: string;
  loading: boolean = false;
  actions: any[] = [];
  source: LocalDataSource;
  deleteModalRef: BsModalRef;
  constructor(
    private router: Router,
    private tostr: ToastrService,
    private modalService: NgbModal,
    private fieldService: FieldsService,
    private translate: TranslationService,
    private utiliesService: UtiliesService,
    private activatedRoute: ActivatedRoute,
    private privilegesService: PrivilegesService,


    private api: MainService
  ) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    //check privileges status
    // if (!this.settings['add'] ||
    //   !(this.settings['add']['privilege'] && this.canActive(this.settings['add']['privilege']))) {
    //   this.settings['add'] = false;
    //   this.settings['actions']['add'] = false;
    // }
    // if (!this.settings['edit'] ||
    //   !(this.settings['edit']['privilege'] && this.canActive(this.settings['edit']['privilege']))) {
    //   this.settings['edit'] = false;
    //   this.settings['actions']['edit'] = false;
    // }
    // if (!this.settings['delete'] ||
    //   !(this.settings['delete']['privilege'] && this.canActive(this.settings['delete']['privilege']))) {
    //   this.settings['delete'] = false;
    //   this.settings['actions']['delete'] = false;
    // }
    // if (this.settings['actions']['custom']) {
    //   this.actions = [];
    //   let custom = this.settings['actions']['custom'];
    //   custom.forEach(action => {
    //     if (!action['privilege'] || (action['privilege'] && this.canActive(action['privilege']))) {
    //       this.actions.push(action);
    //     }
    //   });


    //   // if (custom.length > 3) {
    //   //   let action =
    //   //   {
    //   //     name: 'options',
    //   //     title: `<i class="fa fa-bars" title="${this.translate.translateUtterance('button.options')}"></i>`
    //   //   };
    //   //   // for(const action of actions) {
    //   //   //   this.options.push(action);
    //   //   // }
    //   //   this.settings['actions']['custom'] = [action];
    //   // } else {
    //   this.settings['actions']['custom'] = this.actions;
    //   // }
    // }

    // retriving table columns titles
    this.settings['actions']['columnTitle'] = this.translate.translateWord('Table.actions');

    if (this.apiName) {
      this.loading = false;
      this.utiliesService.getSmartTableData(this.apiName)
        .subscribe(data => {
          if (data['success']) {
            // if(!this.settings.columns) {
            //this.getMyColumns(data['data'][0]);
            this.getMyColumns(this.fieldService.getTableInfo(this.fieldIndex));
            this.loading = true;
            this.tostr.success('the data was fetched correctly');
            //}
            this.dataSource = data['data'];
            this.source = new LocalDataSource(this.dataSource);
          }
        }, err => {
          this.loading = true;
          this.tostr.error('there was an error while feching the data');
        })
    } else {

    }
  }

  getMyColumns(data: string[]) {
    // Object.keys(data).forEach(key => {
    //   let KEY = key.toLowerCase();
    //   this.settings.columns[key] = {
    //     title: this.translate.translateWord("Table." + KEY)
    //   }
    // })

    data.forEach(key => {
      let KEY = key.toLowerCase();
      this.settings.columns[key] = {
        title: this.translate.translateWord("Table." + KEY)
      }
    })

  }


  onCreate(event) {
    if (this.addingUrl && this.addingUrl != "") {
      this.router.navigateByUrl(this.addingUrl);
    } else {
      this.router.navigate(['create'], { relativeTo: this.activatedRoute });
    }
  }

  onEdit(event) {
    if (this.editingUrl && this.editingUrl != "") {
      this.router.navigateByUrl(this.editingUrl + "/" + event.data['id']);
    } else {
      this.router.navigate(['edit/' + event.data['id']], { relativeTo: this.activatedRoute });
    }
  }

  onDelete(event) {
    let URL;
    if (this.deletionUrl && this.deletionUrl != "") {
      URL = this.deletionUrl;
    } else {
      URL = "delete"
    }
    this.title = this.translate.translateWord('Table.confirmDelete');
    if (this.settings['delete'] && this.settings['delete']['confirm']) {

      this.modalService.open(this.confirmModal, { size: 'sm' }).result
        .then(res => {
          if (res) {
            this.onDeleteConfirmed(URL, event);
          }
        })
        .catch(err => {
        })
    } else {
      this.onDeleteConfirmed(URL, event);
    }
  }

  onDeleteConfirmed(URL, event) {
    this.utiliesService.deleteSmartTableItem(URL, event['data']['id'])
      .subscribe(data => {
        if (data.success) {
          this.source.remove(event.data);
          this.tostr.success(data.message, "success");
        } else {
          this.tostr.error(data.message, "error");
        }
      }, err => {
        this.tostr.error(err, "error");
      })
  }

  // openModal(template, size) {
  //   return new Promise((resolve, reject) => {
  //     this.modalService.open(template, { size: size }).result.then(res => {
  //       if (res) {
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     }, err => {
  //       reject();
  //     });
  //   })
  // }

  rowSelect() {

  }

  canActive(privilege: any) {
    return this.privilegesService.isAuthorized(privilege);
  }

}
